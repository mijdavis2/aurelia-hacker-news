import '../style/index.scss';
import { Aurelia } from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
    aurelia.use
        .standardConfiguration()
        .feature('components')
        .feature('converters');

    if (process.env.NODE_ENV !== 'production') {
        aurelia.use.developmentLogging();
    }

    aurelia.start().then(() => aurelia.setRoot('app'));
}
