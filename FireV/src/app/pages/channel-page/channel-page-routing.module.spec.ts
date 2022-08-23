import { TestBed } from '@angular/core/testing';
import { ChannelPageRoutingModule } from './channel-page-routing.module';

describe('ChannelPageRoutingModule', () => {
  let pipe: ChannelPageRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ChannelPageRoutingModule] });
    pipe = TestBed.inject(ChannelPageRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
