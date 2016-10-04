import { EventEmitter } from 'events'

export = Etcd

declare function Etcd(urls: Array<string>, options: any);

declare namespace Etcd {
    export interface Etcd {
        setAsync(path: string, value: string, options: any): Promise<void>
        getAsync(path: string, options: any): Promise<any>
        mkdirAsync(path: string, options: any): Promise<void>
        rmdirAsync(path: string, options: any): Promise<void>
        delAsync(path: string, options: any): Promise<void>
        rawAsync(method: string, path: string, index?: any, options?: any): Promise<any>
        watcher(path: string, index?: number, options?: any): EtcdWatcher
    }
    export class EtcdWatcher extends EventEmitter {
        stop(): void
    }    
}
