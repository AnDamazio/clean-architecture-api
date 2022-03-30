export declare abstract class IUserRepository<T> {
    abstract getAll(): Promise<T[]>;
    abstract get(id: string): Promise<T>;
    abstract create(user: T): Promise<T>;
}
