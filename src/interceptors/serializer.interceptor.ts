import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export function Serialize(dto) { 
    return UseInterceptors(new SerializerInterceptor(dto))
}

export class SerializerInterceptor implements NestInterceptor { 
    constructor(private dto: any) { }

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> { 
        
    return next.handle().pipe(
        map((data:any) => { 
            return plainToClass(this.dto, data, { 
                excludeExtraneousValues: true, // Exclude properties not in the DTO
            })
        })
    )
}
}