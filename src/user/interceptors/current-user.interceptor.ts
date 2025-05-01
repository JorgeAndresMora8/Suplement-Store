import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from "@nestjs/common";
import { UserService } from "../user.service";
import { Observable } from "rxjs";


@Injectable()
export class CurrentUserInterceptor implements NestInterceptor { 
    constructor(private readonly userService: UserService){}

    async intercept(context: ExecutionContext, next: CallHandler) {
        const request = context.switchToHttp().getRequest()
        const user = await this.userService.findOne(request.session.userId)
        request.currentUser = user
        return next.handle()
    }


}