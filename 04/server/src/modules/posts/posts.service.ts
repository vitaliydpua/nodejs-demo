import { HttpService, Injectable } from "@nestjs/common";
import * as fs from 'fs';
import { Post } from "./interfaces/post.interface";

@Injectable()
export class PostsService {
    constructor(private http: HttpService) {}

    async getPosts() {
        return await this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
    }
}