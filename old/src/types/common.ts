import { Section } from './models';
import { IComponent } from 'rxspa';

export type SectionStrategy = {
  [Field in keyof Section['content']]: new (
    props: Exclude<Section['content'][Field], undefined>[number],
  ) => IComponent;
};
