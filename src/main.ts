import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

registerLicense('ORg4AjUWIQA/Gnt2VlhhQlJCfV5DQmBWfFN0RnNYf1RxdF9CZEwgOX1dQl9gSH5TckRjWH1eeH1UTmg=');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
