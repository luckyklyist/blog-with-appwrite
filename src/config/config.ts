const config = {
  appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDataBaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
};

export default config;
