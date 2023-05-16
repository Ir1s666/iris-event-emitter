type Listener = (...args: any[]) => void

type Listeners = {
  [key: string]: Set<Listener>
}

interface EmitterMethods {
  publish(tag: string): void
  subscribe(tag: string, callback: Listener): () => void
}

class Emitter implements EmitterMethods {
  private listeners: Listeners

  constructor() {
    this.listeners = {}
  };

  getListenersOrWarn(tag: string) {
    if (this.listeners.hasOwnProperty(tag)) {
      return this.listeners[tag];
    } else {
      console.warn(`Please subscribe ${tag} event before publish!`)
      return false
    }
  }

  publish(tag: string): void {
    const eventListeners = this.getListenersOrWarn(tag);

    if (eventListeners) {
      eventListeners.forEach(cb => cb());
    }
  }

  subscribe(tag: string, callback: Listener): () => void {
    if (this.listeners[tag]) {
      this.listeners[tag].add(callback);
    } else {
      this.listeners = Object.assign(this.listeners, { [tag]: new Set() });
      this.listeners[tag].add(callback);
    }

    const unSubscribe = () => {
      this.listeners[tag].delete(callback);
    }

    return unSubscribe
  }
}

export default Emitter