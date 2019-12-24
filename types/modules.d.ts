declare module 'redux' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface Dispatch<Result extends any = any, A extends Action = AnyAction> {
        <T extends A>(actionId: string, action: T): Promise<Result>;
    }
}
