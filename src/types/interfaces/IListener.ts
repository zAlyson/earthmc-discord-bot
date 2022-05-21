interface IListener {
  listener(...args: any[]): Promise<void>;
}

export { IListener };
