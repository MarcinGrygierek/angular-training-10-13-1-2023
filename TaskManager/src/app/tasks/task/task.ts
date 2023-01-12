import { TaskStatus } from "../../constants/task-status";

export class Task {
    private _id: string;
    private _status: TaskStatus = TaskStatus.New;
    private _title: string;
    private _hidden: boolean;

    constructor(title: string) {
        this._hidden = false;
        this._title = title;
        this._id = `${new Date().getTime()}${Math.round(Math.random() * 1000)}`;
    }

    get id() {
        return this._id;
    }

    get status() {
        return this._status;
    }

    get title() {
        return this._title;
    }

    get hidden() {
        return this._hidden;
    }

    public changeStatus = (newStatus: TaskStatus) => {
        this._status = newStatus;
    }

    public hide = () => {
        this._hidden = true;
    }

    public getPrettyStatus = () => {
        switch(this._status) {
            case TaskStatus.New: return 'Nowe';
            case TaskStatus.InProgress: return 'W trakcie';
            case TaskStatus.Done: return 'Zakończone';
        }
    }

    public isNew = () => this._status === TaskStatus.New;
    public isInProgress = () => this._status === TaskStatus.InProgress;
    public isDone = () => this._status === TaskStatus.Done;
}
