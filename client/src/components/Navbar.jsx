import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useSession } from '../hooks/useSession';
import CardNav from './CardNav/CardNav';

export default function Navbar() {
  const { data: session, status, logout } = useSession();
  const navigate = useNavigate();

  const user = session?.user;
  const isLoggedIn = status === 'authenticated';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getNavItems = () => {
    if (!isLoggedIn) {
      return [
        {
          label: 'Platform',
          bgColor: '#f9f9f9',
          textColor: '#000',
          links: [
            { label: 'Dashboard', href: '/auth' },
            { label: 'Marketplace', href: '/opportunities' }
          ]
        },
        {
          label: 'Explore',
          bgColor: '#CAFF00',
          textColor: '#000',
          links: [
            { label: 'Success Stories', href: '/driplens' },
            { label: 'Explore Talent', href: '/explore' }
          ]
        },
        {
          label: 'Company',
          bgColor: '#111',
          textColor: '#fff',
          links: [
            { label: 'About Us', href: '/about' },
            { label: 'Documentation', href: '/documentation' }
          ]
        }
      ];
    }

    const isClient = user?.role === 'client' || user?.role === 'brand';

    if (isClient) {
      return [
        {
          label: 'Platform',
          bgColor: '#f9f9f9',
          textColor: '#000',
          links: [
            { label: 'Dashboard', href: '/dashboard/brand' }
          ]
        },
        {
          label: 'Explore',
          bgColor: '#CAFF00',
          textColor: '#000',
          links: [
            { label: 'Explore', href: '/explore' }
          ]
        },
        {
          label: 'Company',
          bgColor: '#111',
          textColor: '#fff',
          links: [
            { label: 'Projects', href: '/dashboard/brand?tab=projects' },
            { label: 'Payment', href: '/dashboard/brand?tab=payments' },
            { label: 'Logout', onClick: handleLogout }
          ]
        }
      ];
    }

    // Creator Workflow
    return [
      {
        label: 'Platform',
        bgColor: '#f9f9f9',
        textColor: '#000',
        links: [
          { label: 'Dashboard', href: '/dashboard/creator' }
        ]
      },
      {
        label: 'Explore',
        bgColor: '#CAFF00',
        textColor: '#000',
        links: [
          { label: 'Explore for Brand', href: '/brands' }
        ]
      },
      {
        label: 'Company',
        bgColor: '#111',
        textColor: '#fff',
        links: [
          { label: 'Opportunities', href: '/opportunities' },
          { label: 'Payment', href: '/earnings' },
          { label: 'Logout', onClick: handleLogout }
        ]
      }
    ];
  };

  const getCtaProps = () => {
    if (!isLoggedIn) return { label: 'Get Started', onClick: () => navigate('/auth') };
    const isClient = user?.role === 'client' || user?.role === 'brand';
    if (isClient) return { label: 'Dashboard', onClick: () => navigate('/dashboard/brand') };
    return { label: 'Dashboard', onClick: () => navigate('/dashboard/creator') };
  };

  const navItems = useMemo(() => getNavItems(), [isLoggedIn, user?.id, user?.counts?.newApplications, user?.counts?.unreadMessages]);
  const cta = useMemo(() => getCtaProps(), [isLoggedIn, user?.role]);

  return (
    <CardNav
      logo={
        <span className="font-heading font-bold text-xl tracking-tighter text-black uppercase">
          Driplens
        </span>
      }
      onLogoClick={() => navigate('/')}
      items={navItems}
      ctaLabel={cta.label}
      onCtaClick={cta.onClick}
      baseColor="rgba(255, 255, 255, 0.9)"
      buttonBgColor="#111"
      buttonTextColor="#fff"
    />
  );
}


