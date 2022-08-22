import { TestBed } from '@angular/core/testing';
import { ChannelPageModule } from './channel-page.module';

describe('ChannelPageModule', () => {
  let pipe: ChannelPageModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ChannelPageModule] });
    pipe = TestBed.inject(ChannelPageModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
