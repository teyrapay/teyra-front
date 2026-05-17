import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";

import DashboardLayout from '@/components/dashboard/DashboardLayout';

// Public pages
import Home from '@/pages/Home';
import DocsPage from '@/pages/docs/DocsPage';
import SignIn from '@/pages/auth/SignIn';
import GetStarted from '@/pages/auth/GetStarted';

// Product pages
import HostedCheckout from '@/pages/products/HostedCheckout';
import PaymentLinksPage from '@/pages/products/PaymentLinksPage';
import InvoicingPage from '@/pages/products/InvoicingPage';
import SubscriptionsPage from '@/pages/products/SubscriptionsPage';
import ApiPage from '@/pages/products/ApiPage';

// Solution pages
import EcommercePage from '@/pages/solutions/EcommercePage';
import SaasPage from '@/pages/solutions/SaasPage';
import MarketplacesPage from '@/pages/solutions/MarketplacesPage';
import EnterprisePage from '@/pages/solutions/EnterprisePage';

// Company pages
import AboutPage from '@/pages/company/AboutPage';
import BlogPage from '@/pages/company/BlogPage';
import ContactPage from '@/pages/company/ContactPage';
import StatusPage from '@/pages/company/StatusPage';

// Legal pages
import PrivacyPage from '@/pages/legal/PrivacyPage';
import TermsPage from '@/pages/legal/TermsPage';
import PciPage from '@/pages/legal/PciPage';
import AmlPage from '@/pages/legal/AmlPage';

// Dashboard pages
import Overview from '@/pages/dashboard/Overview';
import Transactions from '@/pages/dashboard/Transactions';
import PaymentLinks from '@/pages/dashboard/PaymentLinks';
import Invoices from '@/pages/dashboard/Invoices';
import Subscriptions from '@/pages/dashboard/Subscriptions';
import Customers from '@/pages/dashboard/Customers';
import Payouts from '@/pages/dashboard/Payouts';
import Reports from '@/pages/dashboard/Reports';
import Developers from '@/pages/dashboard/Developers';
import ApiKeys from '@/pages/dashboard/ApiKeys';
import Settings from '@/pages/dashboard/Settings';

const queryClient = new QueryClient();

function Dashboard({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* Docs */}
      <Route path="/docs" component={DocsPage} />

      {/* Auth */}
      <Route path="/signin" component={SignIn} />
      <Route path="/get-started" component={GetStarted} />

      {/* Products */}
      <Route path="/hosted-checkout" component={HostedCheckout} />
      <Route path="/payment-links-page" component={PaymentLinksPage} />
      <Route path="/invoicing" component={InvoicingPage} />
      <Route path="/subscriptions-page" component={SubscriptionsPage} />
      <Route path="/api" component={ApiPage} />

      {/* Solutions */}
      <Route path="/ecommerce" component={EcommercePage} />
      <Route path="/saas" component={SaasPage} />
      <Route path="/marketplaces" component={MarketplacesPage} />
      <Route path="/enterprise" component={EnterprisePage} />

      {/* Company */}
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/status" component={StatusPage} />

      {/* Legal */}
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/pci" component={PciPage} />
      <Route path="/aml" component={AmlPage} />

      {/* Dashboard */}
      <Route path="/dashboard" component={() => <Dashboard><Overview /></Dashboard>} />
      <Route path="/transactions" component={() => <Dashboard><Transactions /></Dashboard>} />
      <Route path="/payment-links" component={() => <Dashboard><PaymentLinks /></Dashboard>} />
      <Route path="/invoices" component={() => <Dashboard><Invoices /></Dashboard>} />
      <Route path="/subscriptions" component={() => <Dashboard><Subscriptions /></Dashboard>} />
      <Route path="/customers" component={() => <Dashboard><Customers /></Dashboard>} />
      <Route path="/payouts" component={() => <Dashboard><Payouts /></Dashboard>} />
      <Route path="/reports" component={() => <Dashboard><Reports /></Dashboard>} />
      <Route path="/developers" component={() => <Dashboard><Developers /></Dashboard>} />
      <Route path="/api-keys" component={() => <Dashboard><ApiKeys /></Dashboard>} />
      <Route path="/settings" component={() => <Dashboard><Settings /></Dashboard>} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
