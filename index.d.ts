export default class Etcd {
    set(path: string, options: any): void
    get(path: string, options: any): void
    mkdir(path: string, options: any): void
    rmdir(path: string, options: any): void
    del(path: string, options: any): void
    watcher(path: string, options: any): void
}