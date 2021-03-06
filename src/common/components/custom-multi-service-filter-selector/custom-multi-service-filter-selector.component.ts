import { Component } from '@angular/core';
import { HelgolandServicesConnector } from '@helgoland/core';
import { MultiServiceFilterSelectorComponent } from '@helgoland/selector';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'n52-custom-multi-service-filter-selector',
  templateUrl: './custom-multi-service-filter-selector.component.html',
  styleUrls: ['./custom-multi-service-filter-selector.component.scss']
})
export class CustomMultiServiceFilterSelectorComponent extends MultiServiceFilterSelectorComponent {

  constructor(
    protected servicesConnector: HelgolandServicesConnector,
    protected translate: TranslateService
  ) {
    super(servicesConnector, translate);
  }

}
