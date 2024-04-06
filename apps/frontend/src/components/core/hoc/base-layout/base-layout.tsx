import { Footer } from 'components/core/footer';
import { Nav } from 'components/core/nav';
import { ContactsProvider } from 'components/core/providers/contacts';
import { ExperienceProvider } from 'components/core/providers/experience';
import { IdentityProvider } from 'components/core/providers/identity';
import { NavigationProvider } from 'components/core/providers/navigation';
import { ThemeProvider } from 'components/core/providers/theme';
import { FC } from 'react';
import { BackendService } from 'services/backend.service';
import { HOCProps } from 'types/hoc.types';
import css from './base-layout.module.scss';

export const BaseLayout: FC<HOCProps> = async ({ children }) => {
  const [contacts, identity, experience] = await Promise.all([
    BackendService.getContacts(),
    BackendService.getIdentity(),
    BackendService.getExperience(),
  ]);

  return (
    <IdentityProvider identity={identity}>
      <ContactsProvider contacts={contacts}>
        <ExperienceProvider value={experience}>
          <ThemeProvider>
            <NavigationProvider>
              <Nav />
              <main className={css.main}>{children}</main>
              <Footer />
            </NavigationProvider>
          </ThemeProvider>
        </ExperienceProvider>
      </ContactsProvider>
    </IdentityProvider>
  );
};
