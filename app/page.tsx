import initial from '@/content/hotel.json';
import type {Content} from '@/lib/types';
import HotelProvider from '@/components/filipiniana/HotelProvider';
import Navbar from '@/components/filipiniana/Navbar';
import Hero from '@/components/filipiniana/Hero';
import TrustBadges from '@/components/filipiniana/TrustBadges';
import AboutBento from '@/components/filipiniana/AboutBento';
import ServiceGrid from '@/components/filipiniana/ServiceGrid';
import Dining from '@/components/filipiniana/Dining';
import Events from '@/components/filipiniana/Events';
import Testimonials from '@/components/filipiniana/Testimonials';
import Gallery from '@/components/filipiniana/Gallery';
import Visit from '@/components/filipiniana/Visit';
import PlanningBanner from '@/components/filipiniana/PlanningBanner';
import Newsletter from '@/components/filipiniana/Newsletter';
import Footer from '@/components/filipiniana/Footer';
export default function Home(){return <HotelProvider content={initial as Content}><a className="skip-link" href="#welcome">Skip to content</a><Navbar/><main><Hero/><TrustBadges/><AboutBento/><ServiceGrid/><Dining/><Events/><Testimonials/><PlanningBanner/><Gallery/><Visit/><Newsletter/></main><Footer/></HotelProvider>}
