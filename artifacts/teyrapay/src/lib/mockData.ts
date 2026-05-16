export const MOCK_TRANSACTIONS = [
  { id: 'txn_1a2b', reference: 'TXN-20240516-001', customer_name: 'Mohammed Al-Rashid', customer_email: 'mo.rashid@email.sa', amount: 4500, currency: 'SAR', fee: 130.5, net: 4369.5, status: 'succeeded', payment_method: 'credit_card', psp: 'checkout', created_date: '2026-05-16T08:23:11Z' },
  { id: 'txn_2b3c', reference: 'TXN-20240516-002', customer_name: 'Fatima Al-Zahra', customer_email: 'fatima.z@company.ae', amount: 12800, currency: 'SAR', fee: 371.2, net: 12428.8, status: 'succeeded', payment_method: 'mada', psp: 'paytabs', created_date: '2026-05-16T09:11:44Z' },
  { id: 'txn_3c4d', reference: 'TXN-20240516-003', customer_name: 'Ahmed Hassan', customer_email: 'ahmed.h@startup.sa', amount: 750, currency: 'SAR', fee: 21.75, net: 728.25, status: 'failed', payment_method: 'credit_card', psp: 'checkout', created_date: '2026-05-16T10:05:22Z' },
  { id: 'txn_4d5e', reference: 'TXN-20240516-004', customer_name: 'Sara Al-Mutairi', customer_email: 'sara.m@retail.kw', amount: 2200, currency: 'SAR', fee: 63.8, net: 2136.2, status: 'pending', payment_method: 'apple_pay', psp: 'checkout', created_date: '2026-05-16T10:45:33Z' },
  { id: 'txn_5e6f', reference: 'TXN-20240515-089', customer_name: 'Omar Khalid', customer_email: 'omar.k@ecom.sa', amount: 8900, currency: 'SAR', fee: 258.1, net: 8641.9, status: 'succeeded', payment_method: 'credit_card', psp: 'paytabs', created_date: '2026-05-15T14:22:00Z' },
  { id: 'txn_6f7g', reference: 'TXN-20240515-090', customer_name: 'Nora Al-Fahad', customer_email: 'nora.f@fashion.ae', amount: 3400, currency: 'SAR', fee: 98.6, net: 3301.4, status: 'refunded', payment_method: 'credit_card', psp: 'checkout', created_date: '2026-05-15T15:10:19Z' },
  { id: 'txn_7g8h', reference: 'TXN-20240515-091', customer_name: 'Yousef Al-Anazi', customer_email: 'y.anazi@tech.sa', amount: 19500, currency: 'SAR', fee: 565.5, net: 18934.5, status: 'succeeded', payment_method: 'bank_transfer', psp: 'paytabs', created_date: '2026-05-15T16:44:51Z' },
  { id: 'txn_8h9i', reference: 'TXN-20240514-077', customer_name: 'Layla Hassan', customer_email: 'layla.h@mart.sa', amount: 560, currency: 'SAR', fee: 16.24, net: 543.76, status: 'disputed', payment_method: 'mada', psp: 'checkout', created_date: '2026-05-14T11:33:00Z' },
  { id: 'txn_9i0j', reference: 'TXN-20240514-078', customer_name: 'Khalid Al-Omar', customer_email: 'k.omar@biz.sa', amount: 6700, currency: 'SAR', fee: 194.3, net: 6505.7, status: 'succeeded', payment_method: 'credit_card', psp: 'tap', created_date: '2026-05-14T13:15:00Z' },
  { id: 'txn_0j1k', reference: 'TXN-20240514-079', customer_name: 'Reem Saleh', customer_email: 'reem.s@shop.kw', amount: 1800, currency: 'KWD', fee: 52.2, net: 1747.8, status: 'succeeded', payment_method: 'knet', psp: 'paytabs', created_date: '2026-05-14T14:55:00Z' },
];

export const MOCK_INVOICES = [
  { id: 'inv_1', invoice_number: 'INV-2026-0041', customer_name: 'TechStart Arabia', customer_email: 'billing@techstart.sa', amount: 18500, currency: 'SAR', status: 'paid', due_date: '2026-05-10', notes: 'Q2 platform subscription', created_date: '2026-04-30' },
  { id: 'inv_2', invoice_number: 'INV-2026-0042', customer_name: 'Gulf Commerce LLC', customer_email: 'accounts@gulfcommerce.ae', amount: 34200, currency: 'SAR', status: 'sent', due_date: '2026-05-20', notes: 'Integration services', created_date: '2026-05-01' },
  { id: 'inv_3', invoice_number: 'INV-2026-0043', customer_name: 'Riyadh Retail Group', customer_email: 'finance@rrg.sa', amount: 7800, currency: 'SAR', status: 'overdue', due_date: '2026-05-05', notes: 'Monthly setup fee', created_date: '2026-04-25' },
  { id: 'inv_4', invoice_number: 'INV-2026-0044', customer_name: 'Digital Payments KW', customer_email: 'pay@dpkw.kw', amount: 11200, currency: 'KWD', status: 'draft', due_date: '2026-06-01', notes: '', created_date: '2026-05-14' },
  { id: 'inv_5', invoice_number: 'INV-2026-0045', customer_name: 'FinTech UAE', customer_email: 'billing@fintech.ae', amount: 62000, currency: 'AED', status: 'viewed', due_date: '2026-05-25', notes: 'Enterprise license Q2', created_date: '2026-05-10' },
];

export const MOCK_PAYOUTS = [
  { id: 'po_1', amount: 89430, currency: 'SAR', bank_name: 'Al Rajhi Bank', account_last4: '4892', status: 'paid', arrival_date: '2026-05-14', description: 'Weekly settlement', created_date: '2026-05-13' },
  { id: 'po_2', amount: 124500, currency: 'SAR', bank_name: 'Al Rajhi Bank', account_last4: '4892', status: 'in_transit', arrival_date: '2026-05-18', description: 'Weekly settlement', created_date: '2026-05-17' },
  { id: 'po_3', amount: 45200, currency: 'SAR', bank_name: 'Al Rajhi Bank', account_last4: '4892', status: 'pending', arrival_date: '2026-05-22', description: 'Weekly settlement', created_date: '2026-05-21' },
  { id: 'po_4', amount: 67800, currency: 'SAR', bank_name: 'Al Rajhi Bank', account_last4: '4892', status: 'paid', arrival_date: '2026-05-07', description: 'Weekly settlement', created_date: '2026-05-06' },
];

export const MOCK_API_KEYS = [
  { id: 'key_1', name: 'Production Server', key_prefix: 'sk_live_4f8a2b1c9e3d7f6a', environment: 'live', is_active: true, last_used: '2026-05-16', created_date: '2026-01-15' },
  { id: 'key_2', name: 'Development', key_prefix: 'sk_test_9k2m4n7p1q5r8s0t', environment: 'test', is_active: true, last_used: '2026-05-16', created_date: '2026-02-01' },
  { id: 'key_3', name: 'Staging', key_prefix: 'sk_test_2v4w6x8y0z1a3b5c', environment: 'test', is_active: false, last_used: '2026-04-30', created_date: '2026-03-10' },
];

export const MOCK_PAYMENT_LINKS = [
  { id: 'pl_1', title: 'Premium Plan - Annual', amount: 4800, currency: 'SAR', status: 'active', views: 124, conversions: 31, total_collected: 148800, expires_at: '2026-12-31', created_date: '2026-01-10' },
  { id: 'pl_2', title: 'Consultation Fee', amount: 500, currency: 'SAR', status: 'active', views: 48, conversions: 12, total_collected: 6000, expires_at: '2026-06-30', created_date: '2026-03-15' },
  { id: 'pl_3', title: 'One-time Setup', amount: 2500, currency: 'SAR', status: 'completed', views: 67, conversions: 23, total_collected: 57500, expires_at: '2026-04-01', created_date: '2026-02-01' },
  { id: 'pl_4', title: 'Enterprise Demo', amount: 0, currency: 'SAR', status: 'active', views: 14, conversions: 3, total_collected: 0, expires_at: '2026-07-01', created_date: '2026-05-01' },
];

export const MOCK_CUSTOMERS = [
  { id: 'cus_1', name: 'TechStart Arabia', email: 'contact@techstart.sa', phone: '+966 50 123 4567', country: 'Saudi Arabia', total_spend: 67400, transaction_count: 23, last_transaction: '2026-05-15', created_date: '2026-01-10' },
  { id: 'cus_2', name: 'Gulf Commerce LLC', email: 'billing@gulfcommerce.ae', phone: '+971 4 234 5678', country: 'UAE', total_spend: 143000, transaction_count: 41, last_transaction: '2026-05-16', created_date: '2025-11-20' },
  { id: 'cus_3', name: 'Riyadh Retail Group', email: 'finance@rrg.sa', phone: '+966 11 345 6789', country: 'Saudi Arabia', total_spend: 28900, transaction_count: 15, last_transaction: '2026-05-12', created_date: '2026-02-14' },
  { id: 'cus_4', name: 'Digital Payments KW', email: 'pay@dpkw.kw', phone: '+965 6 456 7890', country: 'Kuwait', total_spend: 52000, transaction_count: 19, last_transaction: '2026-05-10', created_date: '2025-12-01' },
  { id: 'cus_5', name: 'FinTech UAE', email: 'billing@fintech.ae', phone: '+971 2 567 8901', country: 'UAE', total_spend: 291000, transaction_count: 87, last_transaction: '2026-05-16', created_date: '2025-10-05' },
];

export const MOCK_SUBSCRIPTIONS = [
  { id: 'sub_1', plan_name: 'Business Monthly', customer_name: 'TechStart Arabia', customer_email: 'contact@techstart.sa', amount: 399, currency: 'USD', interval: 'monthly', status: 'active', next_billing: '2026-06-15', created_date: '2026-01-15' },
  { id: 'sub_2', plan_name: 'Starter Monthly', customer_name: 'Sara Online Shop', customer_email: 'sara@shop.sa', amount: 99, currency: 'USD', interval: 'monthly', status: 'active', next_billing: '2026-06-01', created_date: '2026-02-01' },
  { id: 'sub_3', plan_name: 'Business Monthly', customer_name: 'Gulf Commerce LLC', customer_email: 'billing@gulfcommerce.ae', amount: 399, currency: 'USD', interval: 'monthly', status: 'active', next_billing: '2026-06-10', created_date: '2025-12-10' },
  { id: 'sub_4', plan_name: 'Starter Monthly', customer_name: 'Ahmed Consulting', customer_email: 'ahmed@consulting.sa', amount: 99, currency: 'USD', interval: 'monthly', status: 'cancelled', next_billing: null, created_date: '2026-01-20' },
  { id: 'sub_5', plan_name: 'Enterprise Annual', customer_name: 'FinTech UAE', customer_email: 'billing@fintech.ae', amount: 4788, currency: 'USD', interval: 'yearly', status: 'active', next_billing: '2027-01-01', created_date: '2026-01-01' },
];

export const MOCK_WEBHOOKS = [
  { id: 'wh_1', url: 'https://api.techstart.sa/webhooks/teyrapay', events: ['payment.succeeded', 'payment.failed', 'refund.created'], status: 'active', last_delivery: '2026-05-16T10:45:00Z', success_rate: 98.2 },
  { id: 'wh_2', url: 'https://gulfcommerce.ae/hooks/payments', events: ['payment.succeeded', 'payout.sent'], status: 'active', last_delivery: '2026-05-16T09:11:00Z', success_rate: 100 },
  { id: 'wh_3', url: 'https://old-endpoint.retailgroup.sa/notify', events: ['payment.succeeded'], status: 'failing', last_delivery: '2026-05-14T08:00:00Z', success_rate: 12.5 },
];

export const CHART_DATA_30D = [
  { day: '16 Apr', volume: 38000 }, { day: '17 Apr', volume: 42000 }, { day: '18 Apr', volume: 39500 },
  { day: '19 Apr', volume: 51000 }, { day: '20 Apr', volume: 47500 }, { day: '21 Apr', volume: 29000 },
  { day: '22 Apr', volume: 31000 }, { day: '23 Apr', volume: 55000 }, { day: '24 Apr', volume: 63000 },
  { day: '25 Apr', volume: 58000 }, { day: '26 Apr', volume: 72000 }, { day: '27 Apr', volume: 69000 },
  { day: '28 Apr', volume: 41000 }, { day: '29 Apr', volume: 35000 }, { day: '30 Apr', volume: 78000 },
  { day: '1 May', volume: 82000 }, { day: '2 May', volume: 76000 }, { day: '3 May', volume: 91000 },
  { day: '4 May', volume: 88000 }, { day: '5 May', volume: 54000 }, { day: '6 May', volume: 47000 },
  { day: '7 May', volume: 95000 }, { day: '8 May', volume: 102000 }, { day: '9 May', volume: 98000 },
  { day: '10 May', volume: 112000 }, { day: '11 May', volume: 108000 }, { day: '12 May', volume: 71000 },
  { day: '13 May', volume: 64000 }, { day: '14 May', volume: 118000 }, { day: '15 May', volume: 125000 },
  { day: '16 May', volume: 89000 },
];

export const PAYMENT_METHODS_DATA = [
  { name: 'Credit Card', value: 42, color: '#3B82F6' },
  { name: 'Mada', value: 28, color: '#10B981' },
  { name: 'Apple Pay', value: 16, color: '#8B5CF6' },
  { name: 'Bank Transfer', value: 9, color: '#F59E0B' },
  { name: 'Other', value: 5, color: '#6B7280' },
];
