import React, { useState } from 'react';
import HelpCenter from './screens/HelpCenter/HelpCenter';
import ChatBot from './screens/ChatBot/ChatBot';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import NameInputScreen from './screens/NameInputScreen/NameInputScreen';
import LogoScreen from './screens/LogoScreen/LogoScreen';
import AccessibilityScreen from './screens/AccessibilityScreen/AccessibilityScreen';
import LanguageScreen from './screens/LanguageScreen/LanguageScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen/ForgotPasswordScreen';
import VerificationScreen from './screens/VerificationScreen/VerificationScreen';
import RoleSelectionScreen from './screens/RoleSelectionScreen/RoleSelectionScreen';
import FarmerVerificationScreen from './screens/FarmerVerificationScreen/FarmerVerificationScreen';
import ConsumerHome from './screens/ConsumerHome/ConsumerHome';
import FarmerHome from './screens/FarmerHome/FarmerHome';
import FarmerOtpScreen from './screens/FarmerOtpScreen/FarmerOtpScreen';
import FarmerSuccessScreen from './screens/FarmerSuccessScreen/FarmerSuccessScreen';
import AddItemScreen from './screens/AddItemScreen/AddItemScreen';
import TotalRevenueScreen from './screens/TotalRevenueScreen/TotalRevenueScreen';
import FarmerProfileScreen from './screens/FarmerProfileScreen/FarmerProfileScreen';
import FarmerSettingsScreen from './screens/FarmerSettingsScreen/FarmerSettingsScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen/PersonalInfoScreen';
import UserReviewsScreen from './screens/UserReviewsScreen/UserReviewsScreen';
import NotificationsScreen from './screens/NotificationsScreen/NotificationsScreen';
import WithdrawalScreen from './screens/WithdrawalScreen/WithdrawalScreen';
import MyCartScreen from './screens/MyCartScreen/MyCartScreen';
import ConsumerProfileScreen from './screens/ConsumerProfileScreen/ConsumerProfileScreen';
import ConsumerSettingsScreen from './screens/ConsumerSettingsScreen/ConsumerSettingsScreen';
import ConsumerPersonalInfoScreen from './screens/ConsumerPersonalInfoScreen/ConsumerPersonalInfoScreen';
import ConsumerAddressListScreen from './screens/ConsumerAddressListScreen/ConsumerAddressListScreen';
import ConsumerAddAddressScreen from './screens/ConsumerAddAddressScreen/ConsumerAddAddressScreen';
import ConsumerPaymentMethodsScreen from './screens/ConsumerPaymentMethodsScreen/ConsumerPaymentMethodsScreen';
import ConsumerAddCardScreen from './screens/ConsumerAddCardScreen/ConsumerAddCardScreen';
import CheckoutPaymentScreen from './screens/Checkout/CheckoutPaymentScreen';
import OrderConfirmationScreen from './screens/Checkout/OrderConfirmationScreen';
import OrderSuccessScreen from './screens/Checkout/OrderSuccessScreen';
import OrderTrackingScreen from './screens/Checkout/OrderTrackingScreen';
import DeliveryStatusScreen from './screens/Checkout/DeliveryStatusScreen';
import DiscountScreen from './screens/DiscountScreen/DiscountScreen';
import FavoritesScreen from './screens/FavoritesScreen/FavoritesScreen';
import TotalOrdersScreen from './screens/ConsumerStats/TotalOrdersScreen';
import AverageSpendScreen from './screens/ConsumerStats/AverageSpendScreen';
import LoyaltyPointsScreen from './screens/ConsumerStats/LoyaltyPointsScreen';
import FarmerTodayStatsScreen from './screens/FarmerTodayStatsScreen/FarmerTodayStatsScreen';
import FarmerMonthlyStatsScreen from './screens/FarmerMonthlyStatsScreen/FarmerMonthlyStatsScreen';
import FarmerCertificationScreen from './screens/FarmerCertificationScreen/FarmerCertificationScreen';

import ConsumerNotificationsScreen from './screens/NotificationsScreen/ConsumerNotificationsScreen';
import FarmerOrderHistoryScreen from './screens/FarmerOrderHistoryScreen/FarmerOrderHistoryScreen';
import FarmerWithdrawalHistoryScreen from './screens/FarmerWithdrawalHistoryScreen/FarmerWithdrawalHistoryScreen';

import ItemDetailsScreen from './screens/ItemDetailsScreen/ItemDetailsScreen';

function App() {
  const [history, setHistory] = useState(['splash']);
  const [selectedItem, setSelectedItem] = useState(null); // Add state for selected item

  const screen = history[history.length - 1];
  const [showVerification, setShowVerification] = useState(false);

  // Debug logging
  React.useEffect(() => {
    console.log('CURRENT SCREEN:', screen);
    console.log('FULL HISTORY:', history);
  }, [screen, history]);

  const DebugOverlay = () => (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 999999, background: 'rgba(0,0,0,0.8)', color: '#0f0', padding: '10px', pointerEvents: 'none', border: '2px solid red', fontSize: '20px' }}>
      DEBUG OVERLAY <br />
      Screen: {String(screen)} <br />
      History: {history.join(' > ')}
    </div>
  );

  const navigateTo = (target, data = null) => {
    if (data) setSelectedItem(data);
    setHistory((prev) => [...prev, target]);
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1));
    }
  };



  // ---------- Main Navigation ----------
  // Force Render DebugOverlay
  const CurrentScreenComponent = () => {
    if (screen === 'farmerProfile') {
      return (
        <FarmerProfileScreen
          onBack={goBack}
          onNavigate={(target) => navigateTo(target)}
          onHelpClick={() => navigateTo('help')}
          onSettingsClick={() => navigateTo('farmerSettings')}
          onAddItem={() => navigateTo('addItem')}
        />
      );
    }

    if (screen === 'farmerTodayStats') {
      return <FarmerTodayStatsScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'farmerMonthlyStats') {
      return <FarmerMonthlyStatsScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'farmerSettings') {
      return <FarmerSettingsScreen
        onBack={goBack}
        onNavigate={(target) => navigateTo(target)}
        onHelpClick={() => navigateTo('help')}
      />;
    }

    if (screen === 'farmerCertification') {
      return <FarmerCertificationScreen onBack={goBack} />;
    }

    if (screen === 'personalInfo') {
      return <PersonalInfoScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'userReviews') {
      return <UserReviewsScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'notifications') {
      return <NotificationsScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'withdrawal') {
      return <WithdrawalScreen
        onBack={goBack}
        onSuccess={() => {
          // Pop the withdrawal screen and go back to settings
          goBack();
        }}
        onHelpClick={() => navigateTo('help')}
      />;
    }

    if (screen === 'farmerHome') {
      return (
        <FarmerHome
          onNavigate={(target) => navigateTo(target)}
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
    }

    if (screen === 'splash') {
      return <SplashScreen onFinish={() => navigateTo('welcome')} />;
    }

    if (screen === 'welcome') {
      return <WelcomeScreen onStart={() => navigateTo('nameInput')} />;
    }

    if (screen === 'nameInput') {
      return (
        <NameInputScreen
          onNext={(name) => {
            console.log('User Name:', name);
            navigateTo('logo');
          }}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'logo') {
      return (
        <LogoScreen
          onGetStarted={() => navigateTo('signIn')}
          onAccessibility={() => navigateTo('accessibility')}
          onLanguage={() => navigateTo('language')}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'accessibility') {
      return (
        <AccessibilityScreen onBack={goBack} onContinue={goBack} onHelpClick={() => navigateTo('help')} />
      );
    }

    if (screen === 'language') {
      return (
        <LanguageScreen onBack={goBack} onContinue={goBack} onHelpClick={() => navigateTo('help')} />
      );
    }

    // ---------- Auth Screens ----------
    if (screen === 'signIn') {
      return (
        <SignInScreen
          onSignUp={() => navigateTo('signUp')}
          onForgotPassword={() => navigateTo('forgotPassword')}
          onSignIn={() => navigateTo('roleSelection')}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'signUp') {
      return (
        <SignUpScreen
          onSignIn={() => navigateTo('signIn')}
          onSignUp={() => navigateTo('roleSelection')}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'forgotPassword') {
      return (
        <>
          <ForgotPasswordScreen onBack={goBack} onSend={() => setShowVerification(true)} onHelpClick={() => navigateTo('help')} />
          {showVerification && (
            <VerificationScreen onClose={() => setShowVerification(false)} onResend={() => console.log('Resend OTP')} />
          )}
        </>
      );
    }

    if (screen === 'roleSelection') {
      return (
        <RoleSelectionScreen
          onBack={goBack}
          onContinue={(role) => {
            console.log('Selected Role:', role);
            if (role === 'FARMER') {
              navigateTo('farmerVerification');
            } else {
              navigateTo('consumerHome');
            }
          }}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'farmerVerification') {
      return (
        <FarmerVerificationScreen
          onBack={goBack}
          onSendOtp={() => {
            console.log('OTP Sent');
            navigateTo('farmerOtp');
          }}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'farmerOtp') {
      return (
        <FarmerOtpScreen
          onBack={goBack}
          onVerify={() => {
            console.log('OTP Verified');
            navigateTo('farmerSuccess');
          }}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'farmerSuccess') {
      return (
        <FarmerSuccessScreen
          onStart={() => {
            console.log('Journey Started');
            navigateTo('farmerHome');
          }}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

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


    if (screen === 'consumerHome') {
      // window.alert('DEBUG: Entering ConsumerHome'); 
      return (
        <ConsumerHome
          onNavigate={navigateTo}
          onHelpClick={() => navigateTo('help')}
          onAddToCart={addToCart}
        />
      );
    }

    if (screen === 'notifications') {
      return (
        <NotificationsScreen
          onBack={goBack}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'consumerNotifications') {
      return (
        <ConsumerNotificationsScreen
          onBack={goBack}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'cart') {
      return (
        <MyCartScreen
          onBack={goBack}
          onHelpClick={() => navigateTo('help')}
          onNavigate={navigateTo}
          cartItems={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemove={removeFromCart}
        />
      );
    }

    if (screen === 'consumerProfile') {
      return <ConsumerProfileScreen onBack={goBack} onNavigate={(target) => navigateTo(target)} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'consumerSettings') {
      return <ConsumerSettingsScreen onBack={goBack} onNavigate={(target) => navigateTo(target)} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'farmerOrderHistory') {
      return <FarmerOrderHistoryScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'farmerWithdrawalHistory') {
      return <FarmerWithdrawalHistoryScreen onBack={goBack} onNavigate={(target) => navigateTo(target)} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'consumerPersonalInfo') {
      return <ConsumerPersonalInfoScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    }

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


    if (screen === 'consumerAddresses') {
      return <ConsumerAddressListScreen
        onBack={goBack}
        onNavigate={(target) => navigateTo(target)}
        addresses={addresses}
        onEditAddress={(addr) => {
          setAddressToEdit(addr);
          navigateTo('consumerAddAddress');
        }}
        onDeleteAddress={deleteAddress}
      />;
    }

    if (screen === 'consumerAddAddress') {
      return <ConsumerAddAddressScreen
        onBack={() => {
          setAddressToEdit(null);
          goBack();
        }}
        editAddress={addressToEdit}
        onSave={addOrUpdateAddress}
      />;
    }

    if (screen === 'consumerPaymentMethods') {
      return <ConsumerPaymentMethodsScreen onBack={goBack} onNavigate={(target) => navigateTo(target)} />;
    }

    if (screen === 'consumerAddCard') {
      return <ConsumerAddCardScreen onBack={goBack} />;
    }

    // ---------- Checkout Flow ----------
    // ---------- Checkout Flow ----------
    if (screen === 'checkoutPayment') {
      return <CheckoutPaymentScreen
        onBack={goBack}
        onConfirm={() => navigateTo('orderConfirmation')}
        onHelpClick={() => navigateTo('help')}
      />;
    }

    if (screen === 'orderConfirmation') {
      return <OrderConfirmationScreen
        onBack={goBack}
        onConfirm={() => navigateTo('orderSuccess')}
        onNavigate={(target) => navigateTo(target)}
        onHelpClick={() => navigateTo('help')}
      />;
    }

    if (screen === 'orderSuccess') {
      return <OrderSuccessScreen
        onTrack={() => navigateTo('orderTracking')}
        onContinue={() => navigateTo('consumerHome')}
      />;
    }

    if (screen === 'orderTracking') {
      return <OrderTrackingScreen
        onBack={goBack}
        onStatusClick={() => navigateTo('deliveryStatus')}
      />;
    }

    if (screen === 'deliveryStatus') {
      return <DeliveryStatusScreen onBack={goBack} />;
    }

    if (screen === 'discount') {
      return <DiscountScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'favorites') {
      return <FavoritesScreen
        onBack={goBack}
        onHelpClick={() => navigateTo('help')}
        onNavigate={navigateTo}
      />;
    }

    if (screen === 'totalOrders') return <TotalOrdersScreen onBack={goBack} />;
    if (screen === 'averageSpend') return <AverageSpendScreen onBack={goBack} />;
    if (screen === 'loyaltyPoints') return <LoyaltyPointsScreen onBack={goBack} />;

    if (screen === 'addItem') {
      return (
        <AddItemScreen
          onBack={goBack}
          onSave={() => {
            console.log('Item Saved');
            goBack();
          }}
          onHelpClick={() => navigateTo('help')}
        />
      );
    }

    if (screen === 'totalRevenue') {
      return <TotalRevenueScreen onBack={goBack} onHelpClick={() => navigateTo('help')} />;
    }

    if (screen === 'itemDetails') {
      return (
        <ItemDetailsScreen
          item={selectedItem}
          onBack={goBack}
          onAddToCart={addToCart}
        />
      );
    }

    // ---------- Help / Chat ----------
    if (screen === 'help' || screen === 'chat') {
      return screen === 'chat' ? (
        <ChatBot onBack={goBack} />
      ) : (
        <HelpCenter onBack={goBack} onNavigate={(s) => navigateTo(s)} />
      );
    }

    // Default fallback
    return <HelpCenter onBack={goBack} onNavigate={(s) => navigateTo(s)} />;
  };

  return (
    <CurrentScreenComponent />
  );
}

export default App;
