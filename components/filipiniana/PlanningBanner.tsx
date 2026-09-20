'use client';
import Image from 'next/image';
import {ArrowUpRight,MapPin,CalendarHeart,MessageCircle} from 'lucide-react';
import {useHotel} from './HotelProvider';
import Reveal from './Reveal';
export default function PlanningBanner(){const {openInquiry}=useHotel();return <section className="section container"><Reveal className="planning-banner"><Image src="/images/hotel-pool.webp" alt="Tropical pool and Filipiniana Hotel façade" fill sizes="(max-width: 1280px) 100vw, 1280px"/><div className="planning-overlay"/><div className="planning-content"><span className="eyebrow blur-item">THE NEXT GOOD MEMORY STARTS HERE</span><h2 className="blur-item">Make your next stay<br/><em>easier to plan.</em></h2><div className="planning-values"><span><MapPin size={19}/>Stay close</span><span><CalendarHeart size={19}/>Gather well</span><span><MessageCircle size={19}/>Ask a real team</span></div><button className="button cream-button" onClick={()=>openInquiry()}>Start planning <ArrowUpRight size={17}/></button></div><span className="banner-corner">CALAPAN, WITH A WARM WELCOME.</span></Reveal></section>}
