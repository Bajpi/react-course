import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from "../conf/conf";

export class DatabaseService {
    client = new Client();
    Databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId);

        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getPost(slug) {
        try {
            const post = await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return post;
        } catch (error) {
            console.error("Appwrite service :: getPost :: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            const posts = await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
            return posts;
        } catch (error) {
            console.error("Appwrite service :: getPosts :: ", error);
            return false;
        }
    }

    async createPost({ title, content, slug, status, featuredImage, userId }) {
        try {
            const createdPost = await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    slug,
                    status,
                    featuredImage,
                    userId
                }
            );
            return createdPost;
        } catch (error) {
            console.error("Appwrite service :: createPost :: ", error);
            return false;
        }
    }

    async updatePost({ title, content, slug, status, featuredImage }) {
        try {
            const updatedPost = await this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    slug,
                    status,
                    featuredImage
                }
            );
            return updatedPost;
        } catch (error) {
            console.error("Appwrite service :: updatePost :: ", error);
            return false;
        }
    }

    async deletePost(slug) {
        try {
            await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.error("Appwrite service :: deletePost :: ", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            console.error("Appwrite service :: uploadFile :: ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error("Appwrite service :: deleteFile :: ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        ).href;
    }
}

const databaseService = new DatabaseService();

export default databaseService;