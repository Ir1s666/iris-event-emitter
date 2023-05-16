# iris-event-emitter
简单的发布订阅器

# 食用方法：
```
import Emitter from 'iris-event-emitter';

const emitter = new Emitter();

const eventTag = 'event_1';
// subscribe
const unSubscribe_1 = emitter.subscirbe('event_1', () => {console.log('event 1 callback exec')});
const unSubscribe_2 = emitter.subscirbe('event_1', () => {console.log('event 2 callback exec')});
// publish
emitter.publish('event_1');
// unsubscribe
unSubscribe_1();
unSUbscribe_2();
```
