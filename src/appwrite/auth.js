import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
        
}
 
  // create account method
  async createAccount({email, password, name}) {
    try {
        const userAccount = await this.account.create(ID.unique(), email, password, name);
        if (userAccount) {
            // call another method
            return this.login({email, password});
        } else {
           return  userAccount;
        }
    } catch (error) {
        throw error;
    }
}
  // login method
  async login ({email, password}){
    try {
        return await this.account.createEmailSession(email, password);
    } catch (error) {
        throw error;
    }
  }
  // get user method
  // async getUserAccount () {
  //   try {
  //       return await this.account.get();
  //   } catch (error) {
  //       console.log("appwrite service :: getUserAccount :: error", error);
  //   }
  //   return null; // ager kuch nhi howa toh null return karo
  // }
  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
}

  // logout method
  async logout () {
    try {
        return await this.account.deleteSessions();
    } catch (error) {
        console.log("appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
