import LandingLayout from '../layouts/landing';
import VelteApp from '../modules';
import AboutUsPage from '../modules/aboutus';
import ContactPage from '../modules/contactus';
import TermsPage from '../modules/termsCondition';

export const landingRooutes = [
  {
    path: '/',
    element: <LandingLayout />,
    errorElement: null,
    children: [
      {
        index: true,
        element: <VelteApp />,
      },
      {
        path: 'about',
        element: <AboutUsPage />,
      },
      {
        path: 'contact-us',
        element: <ContactPage />
      },
      {
        path: 'terms',
        element: <TermsPage />
      }
    ],
  },
];
