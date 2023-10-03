import { Client, ID, Databases, Query, Storage } from "appwrite";
import config from "../config/config";

interface Post {
  title: string;
  description: string;
  userId: string;
  post_image: string;
}

export class Services {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async getPosts() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDataBaseId,
        config.appwriteCollectionId
      );
    } catch (error) {
      throw error;
    }
  }

  async getPostId(id: string) {
    try {
      return await this.databases.getDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async createPosts({ title, description, userId, post_image }: Post) {
    try {
      const post = await this.databases.createDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        ID.unique(),
        {
          title,
          description,
          userId,
          post_image,
        }
      );
      return post;
    } catch (error) {
      throw error;
    }
  }

  async updatePosts(
    { title, description, userId, post_image }: Post,
    id: string
  ) {
    try {
      const post = await this.databases.updateDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        id,
        {
          title,
          description,
          userId,
          post_image,
        }
      );
      return post;
    } catch (error) {
      throw error;
    }
  }

  async deletePosts(id: string) {
    try {
      const post = await this.databases.deleteDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        id
      );
      return post;
    } catch (error) {
      throw error;
    }
  }
}

const service = new Services();
export default service;
