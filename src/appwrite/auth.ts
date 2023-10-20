import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async registerUser({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    try {
      let userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return userAccount;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ email, password }: { email: string; password: string }) {
    try {
      return this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getUserSession() {
    try {
      return this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logoutUser() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }

  async googleLogin() {
    try {
      return this.account.createOAuth2Session(
        "google",
        config.oauthSuccessUrl,
        config.oauthFailureUrl
      );
    } catch (error) {
      throw error;
    }
  }

  async githubLogin() {
    try {
      return this.account.createOAuth2Session(
        "github",
        config.oauthSuccessUrl,
        config.oauthFailureUrl
      );
    } catch (error) {
      throw error;
    }
  }

  async getAccount() {
    try {
      return this.account.getSession("current");
    } catch (error) {
      throw error;
    }
  }
}

const authservice = new AuthService();

export default authservice;
