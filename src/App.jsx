import React, { useState } from 'react';

// ── Shared / Auth ─────────────────────────────────────────────
import HelpCenter from './screens/shared/HelpCenter/HelpCenter';
import ChatBot from './screens/shared/ChatBot/ChatBot';
import SplashScreen from './screens/shared/SplashScreen/SplashScreen';
import WelcomeScreen from './screens/shared/WelcomeScreen/WelcomeScreen';
import NameInputScreen from './screens/shared/NameInputScreen/NameInputScreen';
import LogoScreen from './screens/shared/LogoScreen/LogoScreen';
import AccessibilityScreen from './screens/shared/AccessibilityScreen/AccessibilityScreen';
import LanguageScreen from './screens/shared/LanguageScreen/LanguageScreen';
import SignInScreen from './screens/shared/SignInScreen/SignInScreen';
import SignUpScreen from './screens/shared/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from './screens/shared/ForgotPasswordScreen/ForgotPasswordScreen';
import VerificationScreen from './screens/shared/VerificationScreen/VerificationScreen';
import RoleSelectionScreen from './screens/shared/RoleSelectionScreen/RoleSelectionScreen';

// ── Farmer ──────────────────────────────────────────────────
import FarmerVerificationScreen from './screens/farmer/FarmerVerificationScreen/FarmerVerificationScreen';
import FarmerHome from './screens/farmer/FarmerHome/FarmerHome';
import FarmerOtpScreen from './screens/farmer/FarmerOtpScreen/FarmerOtpScreen';
import FarmerSuccessScreen from './screens/farmer/FarmerSuccessScreen/FarmerSuccessScreen';
import AddItemScreen from './screens/farmer/AddItemScreen/AddItemScreen';
import TotalRevenueScreen from './screens/farmer/TotalRevenueScreen/TotalRevenueScreen';
import FarmerProfileScreen from './screens/farmer/FarmerProfileScreen/FarmerProfileScreen';
import FarmerSettingsScreen from './screens/farmer/FarmerSettingsScreen/FarmerSettingsScreen';
import PersonalInfoScreen from './screens/farmer/PersonalInfoScreen/PersonalInfoScreen';
import UserReviewsScreen from './screens/farmer/UserReviewsScreen/UserReviewsScreen';
import NotificationsScreen from './screens/farmer/NotificationsScreen/NotificationsScreen';
import WithdrawalScreen from './screens/farmer/WithdrawalScreen/WithdrawalScreen';
import FarmerTodayStatsScreen from './screens/farmer/FarmerTodayStatsScreen/FarmerTodayStatsScreen';
import FarmerMonthlyStatsScreen from './screens/farmer/FarmerMonthlyStatsScreen/FarmerMonthlyStatsScreen';
import FarmerCertificationScreen from './screens/farmer/FarmerCertificationScreen/FarmerCertificationScreen';
import FarmerOrderHistoryScreen from './screens/farmer/FarmerOrderHistoryScreen/FarmerOrderHistoryScreen';
import FarmerWithdrawalHistoryScreen from './screens/farmer/FarmerWithdrawalHistoryScreen/FarmerWithdrawalHistoryScreen';

// ── Consumer ─────────────────────────────────────────────────
import ConsumerHome from './screens/consumer/ConsumerHome/ConsumerHome';
import MyCartScreen from './screens/consumer/MyCartScreen/MyCartScreen';
import ConsumerProfileScreen from './screens/consumer/ConsumerProfileScreen/ConsumerProfileScreen';
import ConsumerSettingsScreen from './screens/consumer/ConsumerSettingsScreen/ConsumerSettingsScreen';
import ConsumerPersonalInfoScreen from './screens/consumer/ConsumerPersonalInfoScreen/ConsumerPersonalInfoScreen';
import ConsumerAddressListScreen from './screens/consumer/ConsumerAddressListScreen/ConsumerAddressListScreen';
import ConsumerAddAddressScreen from './screens/consumer/ConsumerAddAddressScreen/ConsumerAddAddressScreen';
import ConsumerPaymentMethodsScreen from './screens/consumer/ConsumerPaymentMethodsScreen/ConsumerPaymentMethodsScreen';
import ConsumerAddCardScreen from './screens/consumer/ConsumerAddCardScreen/ConsumerAddCardScreen';
import CheckoutPaymentScreen from './screens/consumer/Checkout/CheckoutPaymentScreen';
import OrderConfirmationScreen from './screens/consumer/Checkout/OrderConfirmationScreen';
import OrderSuccessScreen from './screens/consumer/Checkout/OrderSuccessScreen';
import OrderTrackingScreen from './screens/consumer/Checkout/OrderTrackingScreen';
import DeliveryStatusScreen from './screens/consumer/Checkout/DeliveryStatusScreen';
import DiscountScreen from './screens/consumer/DiscountScreen/DiscountScreen';
import FavoritesScreen from './screens/consumer/FavoritesScreen/FavoritesScreen';
import TotalOrdersScreen from './screens/consumer/ConsumerStats/TotalOrdersScreen';
import AverageSpendScreen from './screens/consumer/ConsumerStats/AverageSpendScreen';
import LoyaltyPointsScreen from './screens/consumer/ConsumerStats/LoyaltyPointsScreen';
import ItemDetailsScreen from './screens/consumer/ItemDetailsScreen/ItemDetailsScreen';
import ConsumerNotificationsScreen from './screens/consumer/NotificationsScreen/ConsumerNotificationsScreen';

// ── Delivery ─────────────────────────────────────────────────
import DeliveryHome from './screens/delivery/DeliveryHome/DeliveryHome';
import DeliveryActiveOrderScreen from './screens/delivery/DeliveryActiveOrderScreen/DeliveryActiveOrderScreen';
import DeliveryHistoryScreen from './screens/delivery/DeliveryHistoryScreen/DeliveryHistoryScreen';

// ── Admin ────────────────────────────────────────────────────
import AdminDashboard from './screens/admin/AdminDashboard/AdminDashboard';
import AdminOrdersScreen from './screens/admin/AdminOrdersScreen/AdminOrdersScreen';
import AdminUsersScreen from './screens/admin/AdminUsersScreen/AdminUsersScreen';
import AdminDisputesScreen from './screens/admin/AdminDisputesScreen/AdminDisputesScreen';

// ─────────────────────────────────────────────────────────────

function App() {
  const [history, setHistory] = useState(['splash']);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showVerification, setShowVerification] = useState(false);

  const screen = history[history.length - 1];

  const navigateTo = (target, data = null) => {
    if (data) setSelectedItem(data);
    setHistory((prev) => [...prev, target]);
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  // ---------- Cart State ----------
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Potato', price: 32, image: '/src/assets/consumer_home/potato.png', quantity: 1 },
    { id: 2, name: 'Onion', price: 32, image: '/src/assets/consumer_home/onion.png', quantity: 1 },
  ]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1, image: product.image }];
    });
  };

  const updateCartQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // ---------- Address State ----------
  const [addresses, setAddresses] = useState([
    { id: 1, type: 'HOME', address: '2464 Royal Ln. Mesa, New Jersey 45463' },
    { id: 2, type: 'WORK', address: '3891 Ranchview Dr. Richardson, California 62639' }
  ]);
  const [addressToEdit, setAddressToEdit] = useState(null);

  const addOrUpdateAddress = (newAddress) => {
    if (addressToEdit) {
      setAddresses(prev => prev.map(a => a.id === addressToEdit.id ? { ...newAddress, id: addressToEdit.id } : a));
    } else {
      setAddresses(prev => [...prev, { ...newAddress, id: Date.now() }]);
    }
  };

  const deleteAddress = (id) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
  };

  // =====================================================================
  // NAVIGATION — renders the current screen directly (no wrapper component)
  // IMPORTANT: Do NOT wrap this in an arrow function like `const Comp = () => ...`
  // that causes React to treat every re-render as a brand-new component, unmounting
  // all screen state (scroll, form inputs, etc.) on every cart add or similar update.
  // =====================================================================
  const renderScreen = () => {

    // ── Shared / Auth ─────────────────────────────────────────
    if (screen === 'splash')    return <SplashScreen onFinish={() => navigateTo('welcome')} />;
    if (screen === 'welcome')   return <WelcomeScreen onStart={() => navigateTo('nameInput')} />;
    if (screen === 'nameInput') return <NameInputScreen onNext={() => navigateTo('logo')} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'logo')      return <LogoScreen onGetStarted={() => navigateTo('signIn')} onAccessibility={() => navigateTo('accessibility')} onLanguage={() => navigateTo('language')} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'accessibility') return <AccessibilityScreen onBack={goBack} onContinue={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'language')  return <LanguageScreen onBack={goBack} onContinue={goBack} onHelpClick={() => navigateTo('help')} />;

    if (screen === 'signIn')    return <SignInScreen onSignUp={() => navigateTo('signUp')} onForgotPassword={() => navigateTo('forgotPassword')} onSignIn={() => navigateTo('roleSelection')} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'signUp')    return <SignUpScreen onSignIn={() => navigateTo('signIn')} onSignUp={() => navigateTo('roleSelection')} onHelpClick={() => navigateTo('help')} />;

    if (screen === 'forgotPassword') return (
      <>
        <ForgotPasswordScreen onBack={goBack} onSend={() => setShowVerification(true)} onHelpClick={() => navigateTo('help')} />
        {showVerification && <VerificationScreen onClose={() => setShowVerification(false)} onResend={() => {}} />}
      </>
    );

    if (screen === 'roleSelection') return (
      <RoleSelectionScreen
        onBack={goBack}
        onContinue={(role) => {
          if (role === 'FARMER')    navigateTo('farmerVerification');
          else if (role === 'CONSUMER')  navigateTo('consumerHome');
          else if (role === 'DELIVERY')  navigateTo('deliveryHome');
          else if (role === 'ADMIN')     navigateTo('adminDashboard');
        }}
        onHelpClick={() => navigateTo('help')}
      />
    );

    // ── Farmer ────────────────────────────────────────────────
    if (screen === 'farmerVerification') return <FarmerVerificationScreen onBack={goBack} onSendOtp={() => navigateTo('farmerOtp')} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'farmerOtp')          return <FarmerOtpScreen onBack={goBack} onVerify={() => navigateTo('farmerSuccess')} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'farmerSuccess')      return <FarmerSuccessScreen onStart={() => navigateTo('farmerHome')} onHelpClick={() => navigateTo('help')} />;

    if (screen === 'farmerHome') return (
      <FarmerHome
        onNavigate={navigateTo}
        onAddItem={() => navigateTo('addItem')}
        onRevenueClick={() => navigateTo('totalRevenue')}
        onProfileClick={() => navigateTo('farmerProfile')}
        onSettingsClick={() => navigateTo('farmerSettings')}
        onNotificationClick={() => navigateTo('notifications')}
        onReviewsClick={() => navigateTo('userReviews')}
        onHelpClick={() => navigateTo('help')}
        onLocationClick={() => navigateTo('consumerAddresses')}
      />
    );

    if (screen === 'farmerProfile')       return <FarmerProfileScreen onBack={goBack} onNavigate={navigateTo} onHelpClick={() => navigateTo('help')} onSettingsClick={() => navigateTo('farmerSettings')} onAddItem={() => navigateTo('addItem')} />;
    if (screen === 'farmerSettings')      return <FarmerSettingsScreen onBack={goBack} onNavigate={navigateTo} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'farmerTodayStats')    return <FarmerTodayStatsScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'farmerMonthlyStats')  return <FarmerMonthlyStatsScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'farmerCertification') return <FarmerCertificationScreen onBack={goBack} />;
    if (screen === 'farmerOrderHistory')  return <FarmerOrderHistoryScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'farmerWithdrawalHistory') return <FarmerWithdrawalHistoryScreen onBack={goBack} onNavigate={navigateTo} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'personalInfo')        return <PersonalInfoScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'userReviews')         return <UserReviewsScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'notifications')       return <NotificationsScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'withdrawal')          return <WithdrawalScreen onBack={goBack} onSuccess={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'addItem')             return <AddItemScreen onBack={goBack} onSave={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'totalRevenue')        return <TotalRevenueScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;

    // ── Consumer ──────────────────────────────────────────────
    if (screen === 'consumerHome')          return <ConsumerHome onNavigate={navigateTo} onHelpClick={() => navigateTo('help')} onAddToCart={addToCart} />;
    if (screen === 'consumerNotifications') return <ConsumerNotificationsScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'consumerProfile')       return <ConsumerProfileScreen onBack={goBack} onNavigate={navigateTo} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'consumerSettings')      return <ConsumerSettingsScreen onBack={goBack} onNavigate={navigateTo} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'consumerPersonalInfo')  return <ConsumerPersonalInfoScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'consumerPaymentMethods') return <ConsumerPaymentMethodsScreen onBack={goBack} onNavigate={navigateTo} />;
    if (screen === 'consumerAddCard')       return <ConsumerAddCardScreen onBack={goBack} />;

    if (screen === 'consumerAddresses') return (
      <ConsumerAddressListScreen
        onBack={goBack}
        onNavigate={navigateTo}
        addresses={addresses}
        onEditAddress={(addr) => { setAddressToEdit(addr); navigateTo('consumerAddAddress'); }}
        onDeleteAddress={deleteAddress}
      />
    );
    if (screen === 'consumerAddAddress') return (
      <ConsumerAddAddressScreen
        onBack={() => { setAddressToEdit(null); goBack(); }}
        editAddress={addressToEdit}
        onSave={addOrUpdateAddress}
      />
    );

    if (screen === 'cart')     return <MyCartScreen onBack={goBack} onHelpClick={() => navigateTo('help')} onNavigate={navigateTo} cartItems={cartItems} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart} />;
    if (screen === 'discount') return <DiscountScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'favorites') return <FavoritesScreen onBack={goBack} onHelpClick={() => navigateTo('help')} onNavigate={navigateTo} />;
    if (screen === 'totalOrders')  return <TotalOrdersScreen onBack={goBack} />;
    if (screen === 'averageSpend') return <AverageSpendScreen onBack={goBack} />;
    if (screen === 'loyaltyPoints') return <LoyaltyPointsScreen onBack={goBack} />;
    if (screen === 'itemDetails')  return <ItemDetailsScreen item={selectedItem} onBack={goBack} onAddToCart={addToCart} />;

    if (screen === 'checkoutPayment')   return <CheckoutPaymentScreen onBack={goBack} onConfirm={() => navigateTo('orderConfirmation')} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'orderConfirmation') return <OrderConfirmationScreen onBack={goBack} onConfirm={() => navigateTo('orderSuccess')} onNavigate={navigateTo} onHelpClick={() => navigateTo('help')} />;
    if (screen === 'orderSuccess')      return <OrderSuccessScreen onTrack={() => navigateTo('orderTracking')} onContinue={() => navigateTo('consumerHome')} />;
    if (screen === 'orderTracking')     return <OrderTrackingScreen onBack={goBack} onStatusClick={() => navigateTo('deliveryStatus')} />;
    if (screen === 'deliveryStatus')    return <DeliveryStatusScreen onBack={goBack} />;

    // ── Delivery Role ─────────────────────────────────────────
    if (screen === 'deliveryHome')        return <DeliveryHome onNavigate={navigateTo} onBack={goBack} />;
    if (screen === 'deliveryActiveOrder') return <DeliveryActiveOrderScreen onBack={goBack} onNavigate={navigateTo} />;
    if (screen === 'deliveryHistory')     return <DeliveryHistoryScreen onBack={goBack} />;

    // ── Admin Role ───────────────────────────────────────────
    if (screen === 'adminDashboard') return <AdminDashboard onNavigate={navigateTo} />;
    if (screen === 'adminOrders')    return <AdminOrdersScreen onBack={goBack} />;
    if (screen === 'adminUsers')     return <AdminUsersScreen onBack={goBack} />;
    if (screen === 'adminDisputes')  return <AdminDisputesScreen onBack={goBack} />;

    // ── Help / Chat ───────────────────────────────────────────
    if (screen === 'help' || screen === 'chat') return screen === 'chat'
      ? <ChatBot onBack={goBack} />
      : <HelpCenter onBack={goBack} onNavigate={(s) => navigateTo(s)} />;

    return <HelpCenter onBack={goBack} onNavigate={(s) => navigateTo(s)} />;
  };

  return (
    <div className="bg-[#120B05] min-h-screen">
      <div className="max-w-7xl mx-auto min-h-screen relative bg-[#120B05] shadow-2xl flex flex-col items-stretch">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
