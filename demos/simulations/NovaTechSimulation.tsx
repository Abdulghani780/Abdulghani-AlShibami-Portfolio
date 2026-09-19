"use client";

import React, { useState, useEffect } from "react";
import { DemoShell } from "@/demos/shared/DemoShell";
import { DemoProps } from "@/demos/registry";
import {
  ShoppingBag,
  Search,
  Star,
  Plus,
  Minus,
  Trash2,
  X,
  CheckCircle2,
  Clock,
  Eye,
  Flame,
  Truck,
  Sparkles,
  Receipt,
  Headphones,
  Watch,
  Glasses,
  Mouse,
  Radio,
  Keyboard,
  Cpu,
} from "lucide-react";

type ProductIconType =
  | "headphones"
  | "smartwatch"
  | "vr_headset"
  | "gaming_mouse"
  | "drone"
  | "keyboard";

interface Product {
  id: number;
  nameEn: string;
  nameAr: string;
  category: "audio" | "wearables" | "gaming" | "smart-home";
  price: number;
  oldPrice: number;
  rating: number;
  reviewsCount: number;
  tagEn: string;
  tagAr: string;
  iconType: ProductIconType;
  descriptionEn: string;
  descriptionAr: string;
  specsEn: string[];
  specsAr: string[];
}

interface CartItem {
  product: Product;
  quantity: number;
}

function ProductIcon({
  type,
  className = "w-5 h-5 text-brand-gold",
}: {
  type: ProductIconType;
  className?: string;
}) {
  switch (type) {
    case "headphones":
      return <Headphones className={className} />;
    case "smartwatch":
      return <Watch className={className} />;
    case "vr_headset":
      return <Glasses className={className} />;
    case "gaming_mouse":
      return <Mouse className={className} />;
    case "drone":
      return <Radio className={className} />;
    case "keyboard":
      return <Keyboard className={className} />;
    default:
      return <Cpu className={className} />;
  }
}

export function NovaTechSimulation({ locale = "en", isRtl = false }: DemoProps) {
  const isArabic = locale === "ar";

  const PRODUCTS: Product[] = [
    {
      id: 1,
      nameEn: "Nova Pro Max ANC Wireless Headphones",
      nameAr: "سماعة الرأس اللاسلكية Nova Pro Max ANC",
      category: "audio",
      price: 899,
      oldPrice: 1199,
      rating: 4.9,
      reviewsCount: 142,
      tagEn: "Hot Deal",
      tagAr: "الأكثر طلباً",
      iconType: "headphones",
      descriptionEn: "Professional over-ear audio with hybrid active noise cancellation, 360 spatial sound, and 50-hour battery life.",
      descriptionAr: "سماعة رأس احترافية مع إلغاء ضوضاء نشط متقدم وصوت مكاني 360 درجة وبطارية تدوم حتى 50 ساعة.",
      specsEn: ["Hybrid Active Noise Cancellation", "50h Ultra Battery Life", "Fast Charge: 10m -> 5h", "Bluetooth 5.4 Hi-Res Audio"],
      specsAr: ["عزل ضوضاء هجين نشط (Hybrid ANC)", "بطارية فائقة تصل إلى 50 ساعة", "شحن سريع: 10 دقائق تعطي 5 ساعات", "بلوتوث 5.4 مع دعم Hi-Res"],
    },
    {
      id: 2,
      nameEn: "Nova Ultra Titanium Smartwatch",
      nameAr: "ساعة Nova Ultra Titanium الذكية",
      category: "wearables",
      price: 1249,
      oldPrice: 1499,
      rating: 4.8,
      reviewsCount: 98,
      tagEn: "New 2026",
      tagAr: "جديد 2026",
      iconType: "smartwatch",
      descriptionEn: "Aerospace-grade titanium chassis with bright sapphire AMOLED display and AI-powered biometrics.",
      descriptionAr: "هيكل من التيتانيوم المقاوم مع شاشة AMOLED ساطعة ومستشعرات صحية ولياقة متقدمة مدعومة بالذكاء الاصطناعي.",
      specsEn: ["Titanium Aerospace Chassis", "100m Water Resistance", "ECG & SpO2 Biometrics", "7-Day Continuous Battery"],
      specsAr: ["هيكل تيتانيوم من الدرجة الفضائية", "مقاومة للماء حتى 100 متر", "مستشعر تخطيط القلب ومستوى الأكسجين", "بطارية تدوم 7 أيام متواصلة"],
    },
    {
      id: 3,
      nameEn: "Nova Vision VR X 8K Headset",
      nameAr: "نظارة الواقع الافتراضي Nova Vision VR X",
      category: "gaming",
      price: 2499,
      oldPrice: 2899,
      rating: 5.0,
      reviewsCount: 76,
      tagEn: "15% OFF",
      tagAr: "خصم 15%",
      iconType: "vr_headset",
      descriptionEn: "Next-gen spatial computing with dual 4K Micro-OLED displays, precision eye tracking, and haptic audio.",
      descriptionAr: "عش تجربة غامرة لا مثيل لها بدقة 8K مع تتبع فوري للعين وحركة اليدين وتوافق كامل مع أحدث الألعاب.",
      specsEn: ["Dual 4K Micro-OLED per eye", "120Hz Ultra Refresh Rate", "Dedicated Spatial Coprocessor", "Spatial 3D Audio Array"],
      specsAr: ["شاشات Micro-OLED بدقة 4K لكل عين", "معدل تحديث فائق 120Hz", "معالج مخصص للواقع المعزز", "صوت مكاني محيطي ثلاثي الأبعاد"],
    },
    {
      id: 4,
      nameEn: "CyberStrike RGB Wireless Gaming Mouse",
      nameAr: "ماوس القيمنق اللاسلكي CyberStrike RGB",
      category: "gaming",
      price: 349,
      oldPrice: 420,
      rating: 4.7,
      reviewsCount: 215,
      tagEn: "Top Rated",
      tagAr: "الأكثر مبيعاً",
      iconType: "gaming_mouse",
      descriptionEn: "Ultra-lightweight 55g competition chassis with 30,000 DPI optical sensor and 0.1ms wireless response.",
      descriptionAr: "حساسية خارقة تصل إلى 30,000 DPI مع وزن خفيف 55 جرام وسرعة استجابة لاسلكية 0.1ms.",
      specsEn: ["30,000 DPI Optical Sensor", "90M Click Optical Switches", "55g Ultra Lightweight", "Dynamic Customizable RGB"],
      specsAr: ["حساس بصري بدقة 30,000 DPI", "مفاتيح بصرية تدوم 90 مليون نقرة", "وزن فائق الخفة 55 غرام فقط", "إضاءة RGB ديناميكية"],
    },
    {
      id: 5,
      nameEn: "SkyMaster 4K Gimbal Smart Drone",
      nameAr: "كاميرا الدرون الذكية SkyMaster 4K Gimbal",
      category: "smart-home",
      price: 1899,
      oldPrice: 2200,
      rating: 4.9,
      reviewsCount: 84,
      tagEn: "Pro Series",
      tagAr: "إصدار احترافي",
      iconType: "drone",
      descriptionEn: "3-axis mechanical gimbal with 4K HDR camera, 10km video transmission, and omnidirectional obstacle avoidance.",
      descriptionAr: "مانع اهتزاز ميكانيكي ثلاثي المحاور مع تصوير 4K HDR ونقل فيديو لمسافة 10 كم وتفادٍ ذكي للعوائق.",
      specsEn: ["4K HDR 60fps Video", "10km Digital Transmission", "38-min Flight Duration", "AI Follow & Return Home"],
      specsAr: ["فيديو 4K HDR بمعدل 60 إطار", "بث رقمي لمسافة 10 كم", "مدة طيران 38 دقيقة", "تتبع تلقائي ذكي والعودة للوطن"],
    },
    {
      id: 6,
      nameEn: "CyberDeck Pro Mechanical Keyboard",
      nameAr: "لوحة المفاتيح الميكانيكية CyberDeck Pro",
      category: "gaming",
      price: 599,
      oldPrice: 750,
      rating: 4.8,
      reviewsCount: 110,
      tagEn: "Custom",
      tagAr: "مخصص",
      iconType: "keyboard",
      descriptionEn: "Hot-swappable mechanical keyboard with CNC aluminum top plate, lubricated switches, and sound dampening foam.",
      descriptionAr: "لوحة مفاتيح ميكانيكية بمفاتيح قابلة للتبديل السريع وهيكل ألومنيوم مع طبقات عزل صوتي متطورة.",
      specsEn: ["Hot-Swappable Switches", "Gasket Mounted Structure", "Tri-Mode Wireless / BT / USB", "PBT Double-Shot Keycaps"],
      specsAr: ["مفاتيح قابلة للتبديل الساخن", "بنية جاسكت ماونت ممتصة للصوت", "اتصال ثلاثي: لاسلكي/بلوتوث/سلكي", "أغطية مفاتيح PBT متينة"],
    },
  ];

  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 },
    { product: PRODUCTS[3], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [invoiceModal, setInvoiceModal] = useState<boolean>(false);

  // Deal countdown timer state (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 35, seconds: 22 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Cart operations
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.product.id === product.id);
      if (existing) {
        return prev.map((ci) =>
          ci.product.id === product.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.product.id === productId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (productId: number) => {
    setCart((prev) => prev.filter((ci) => ci.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const subtotal = cart.reduce((sum, ci) => sum + ci.product.price * ci.quantity, 0);
  const vat = subtotal * 0.15;
  const freeShippingThreshold = 500;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = isFreeShipping || cart.length === 0 ? 0 : 35;
  const finalTotal = subtotal + vat + shippingFee;
  const totalCartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCat = categoryFilter === "all" || p.category === categoryFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameAr.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  const handleReset = () => {
    setCart([
      { product: PRODUCTS[0], quantity: 1 },
      { product: PRODUCTS[3], quantity: 1 },
    ]);
    setCategoryFilter("all");
    setSearchQuery("");
    setIsCartOpen(false);
    setQuickViewProduct(null);
    setInvoiceModal(false);
  };

  return (
    <DemoShell
      title={isArabic ? "نوفا تيك — متجر الأجهزة والتقنيات الذكية المستقبلية" : "NOVA TECH — Cyber Gadgets & Smart Tech Storefront"}
      categoryName={isArabic ? "تطبيقات الويب والتجارة الإلكترونية" : "Web Platforms"}
      projectSlug="novatech"
      locale={locale}
      disclaimer={{
        en: "This interactive showcase demonstrates the verified client-side web application of NOVA TECH. All shopping cart computations, free shipping thresholds, 15% VAT, and invoice generation execute locally in your browser.",
        ar: "هذا العرض التفاعلي يحاكي تطبيق الويب المعتمد لمتجر نوفا تيك. كافة حسابات السلة والضرائب (15%) وعتبة الشحن المجاني ومحاكاة الفواتير تعمل محلياً داخل المتصفح.",
      }}
      onReset={handleReset}
      statusText="STOREFRONT: ONLINE // 2026 EDITION"
      statusItems={[
        { label: isArabic ? "عناصر السلة" : "CART ITEMS", value: `${totalCartCount}` },
        { label: isArabic ? "الشحن المجاني" : "FREE SHIPPING", value: isFreeShipping ? "ELIGIBLE" : "THRESHOLD: 500 SAR" },
        { label: isArabic ? "الإجمالي" : "TOTAL", value: `${finalTotal.toFixed(2)} SAR` },
      ]}
      toolbarActions={
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative px-3 py-1.5 rounded-lg bg-surface-secondary border border-border hover:border-brand-gold/50 text-text-primary text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:outline-none"
            aria-label="View Cart Drawer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-brand-gold" />
            <span className="hidden sm:inline font-bold">
              {isArabic ? "السلة" : "Cart"}
            </span>
            {totalCartCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-brand-gold text-surface-dark text-[10px] font-bold">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      }
    >
      <div className="p-3 sm:p-5 bg-surface text-text-primary min-h-[580px] flex flex-col font-sans">
        {/* Deal of the Day Banner */}
        <div className="bg-gradient-to-r from-brand-gold/15 via-surface-secondary to-surface border border-brand-gold/30 rounded-xl p-3.5 sm:p-4 mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3 text-center sm:text-left rtl:sm:text-right">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                  {isArabic ? "عرض اليوم الحصري" : "EXCLUSIVE DEAL OF THE DAY"}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-400 font-bold">
                  SAVE 400 SAR
                </span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-text-primary mt-0.5">
                {isArabic ? "نظارة الواقع الافتراضي Nova Vision VR X 8K" : "Nova Vision VR X Spatial Computing Headset"}
              </h3>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <Clock className="w-3.5 h-3.5 text-text-dim" />
            <div className="flex items-center gap-1">
              <span className="px-2 py-1 rounded bg-surface border border-border font-bold text-brand-gold">
                {String(timeLeft.hours).padStart(2, "0")}h
              </span>
              <span>:</span>
              <span className="px-2 py-1 rounded bg-surface border border-border font-bold text-brand-gold">
                {String(timeLeft.minutes).padStart(2, "0")}m
              </span>
              <span>:</span>
              <span className="px-2 py-1 rounded bg-surface border border-border font-bold text-brand-gold">
                {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
            </div>
            <button
              onClick={() => addToCart(PRODUCTS[2])}
              className="px-3 py-1 bg-brand-gold text-surface-dark font-bold rounded-lg text-xs hover:brightness-110 active:scale-95 transition-all ml-1 rtl:ml-0 rtl:mr-1 shadow cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:outline-none"
            >
              {isArabic ? "اغتنم العرض" : "Claim Deal"}
            </button>
          </div>
        </div>

        {/* Catalog Filter Tabs & Search Box */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface-secondary/40 p-3 rounded-xl border border-border mb-4">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono pb-1 sm:pb-0">
            {[
              { id: "all", en: "All Gadgets", ar: "جميع الأجهزة" },
              { id: "audio", en: "Audio & ANC", ar: "صوتيات وسماعات" },
              { id: "wearables", en: "Smartwatches", ar: "ساعات ذكية" },
              { id: "gaming", en: "Gaming & VR", ar: "قيمنق وواقع افتراضي" },
              { id: "smart-home", en: "Drones & Smart", ar: "درون وأنظمة ذكية" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:outline-none ${
                  categoryFilter === cat.id
                    ? "bg-brand-gold text-surface-dark font-bold shadow"
                    : "bg-surface border border-border text-text-muted hover:text-text-primary"
                }`}
              >
                {isArabic ? cat.ar : cat.en}
              </button>
            ))}
          </div>

          <div className="relative min-w-[200px]">
            <Search className="w-3.5 h-3.5 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 text-text-dim pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isArabic ? "ابحث في كتالوج الأجهزة..." : "Search cyber gadgets..."}
              className="w-full bg-surface border border-border rounded-lg pl-8 pr-3 rtl:pl-3 rtl:pr-8 py-1.5 text-xs text-text-primary focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredProducts.map((product) => {
            const inCart = cart.find((ci) => ci.product.id === product.id);
            return (
              <div
                key={product.id}
                className="bg-surface-secondary/40 border border-border hover:border-brand-gold/40 rounded-xl p-3.5 flex flex-col justify-between transition-all group hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-brand-gold/15 transition-all">
                      <ProductIcon type={product.iconType} className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                      {isArabic ? product.tagAr : product.tagEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-1 font-mono">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-text-dim text-[10px]">({product.reviewsCount})</span>
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-text-primary mb-1">
                    {isArabic ? product.nameAr : product.nameEn}
                  </h3>
                  <p className="text-[11px] text-text-dim leading-relaxed line-clamp-2 mb-3">
                    {isArabic ? product.descriptionAr : product.descriptionEn}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-brand-gold">
                      {product.price.toFixed(2)} <span className="text-[10px] text-text-muted">SAR</span>
                    </div>
                    <div className="text-[10px] font-mono text-text-dim line-through">
                      {product.oldPrice.toFixed(2)} SAR
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="p-1.5 rounded-lg bg-surface border border-border text-text-dim hover:text-brand-gold transition-colors cursor-pointer"
                      title={isArabic ? "معاينة المواصفات" : "Quick Specs View"}
                      aria-label="Quick Specs View"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {inCart ? (
                      <div className="flex items-center gap-1 bg-surface border border-border rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-text-dim hover:text-text-primary cursor-pointer"
                          aria-label="Decrease Quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold px-1.5">{inCart.quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-text-dim hover:text-text-primary cursor-pointer"
                          aria-label="Increase Quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="py-1 px-2.5 rounded-lg bg-brand-gold text-surface-dark text-xs font-bold font-mono hover:brightness-110 active:scale-95 transition-all flex items-center gap-1 cursor-pointer shadow-sm"
                      >
                        <Plus className="w-3 h-3" />
                        <span>{isArabic ? "إضافة" : "Add"}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="p-12 text-center text-xs font-mono text-text-dim">
            {isArabic ? "لا توجد أجهزة مطابقة للبحث." : "No gadgets found matching your search."}
          </div>
        )}

        {/* QUICK VIEW MODAL */}
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-surface border border-border rounded-xl p-5 shadow-2xl space-y-4 font-sans animate-fade-in">
              <div className="flex items-start justify-between border-b border-border pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center shrink-0">
                    <ProductIcon type={quickViewProduct.iconType} className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-gold font-bold uppercase">
                      {isArabic ? quickViewProduct.tagAr : quickViewProduct.tagEn}
                    </span>
                    <h3 className="font-bold text-sm text-text-primary">
                      {isArabic ? quickViewProduct.nameAr : quickViewProduct.nameEn}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setQuickViewProduct(null)}
                  className="p-1 rounded hover:bg-surface-secondary text-text-dim cursor-pointer"
                  aria-label="Close Quick View"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-text-dim leading-relaxed">
                {isArabic ? quickViewProduct.descriptionAr : quickViewProduct.descriptionEn}
              </p>

              <div>
                <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2">
                  {isArabic ? "المواصفات التقنية الرئيسية:" : "TECHNICAL SPECIFICATIONS:"}
                </div>
                <div className="space-y-1.5">
                  {(isArabic ? quickViewProduct.specsAr : quickViewProduct.specsEn).map((spec, i) => (
                    <div key={i} className="p-2 rounded bg-surface-secondary/50 border border-border text-[11px] font-mono flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-brand-gold shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-border flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold font-mono text-brand-gold">
                    {quickViewProduct.price.toFixed(2)} SAR
                  </div>
                  <div className="text-[10px] font-mono text-text-dim line-through">
                    {quickViewProduct.oldPrice.toFixed(2)} SAR
                  </div>
                </div>
                <button
                  onClick={() => {
                    addToCart(quickViewProduct);
                    setQuickViewProduct(null);
                    setIsCartOpen(true);
                  }}
                  className="py-2 px-4 bg-brand-gold text-surface-dark font-bold text-xs rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 shadow font-mono cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{isArabic ? "إضافة للسلة وفتح الطلب" : "Add to Cart & View"}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* OFFCANVAS CART DRAWER */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
            <div className="w-full max-w-sm bg-surface border-l rtl:border-l-0 rtl:border-r border-border h-full flex flex-col p-4 sm:p-5 shadow-2xl animate-fade-in font-sans">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <div className="flex items-center gap-2 font-mono">
                  <ShoppingBag className="w-4 h-4 text-brand-gold" />
                  <h3 className="font-bold text-sm">
                    {isArabic ? "سلة مشتريات نوفا تيك" : "NovaTech Cart"} ({totalCartCount})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-lg hover:bg-surface-secondary text-text-dim hover:text-text-primary cursor-pointer"
                  aria-label="Close Cart"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Free Shipping Progress Meter */}
              <div className="bg-surface-secondary/50 p-2.5 rounded-lg border border-border mb-3 text-xs font-mono">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3 h-3 text-brand-gold" />
                    <span>{isArabic ? "عتبة الشحن المجاني (500 ر.س):" : "Free Shipping Threshold (500 SAR):"}</span>
                  </span>
                  <span className={`font-bold ${isFreeShipping ? "text-emerald-400" : "text-brand-gold"}`}>
                    {isFreeShipping ? (isArabic ? "مؤهل!" : "ELIGIBLE!") : `${Math.max(0, 500 - subtotal).toFixed(0)} SAR left`}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
                  <div
                    style={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }}
                    className="h-full bg-brand-gold rounded-full transition-all duration-300"
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
                {cart.map((ci) => (
                  <div
                    key={ci.product.id}
                    className="p-2.5 rounded-lg bg-surface-secondary/40 border border-border flex items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center shrink-0">
                        <ProductIcon type={ci.product.iconType} className="w-4 h-4 text-brand-gold" />
                      </div>
                      <div className="truncate">
                        <div className="font-bold text-text-primary truncate">
                          {isArabic ? ci.product.nameAr : ci.product.nameEn}
                        </div>
                        <div className="text-[11px] font-mono text-brand-gold">
                          {ci.product.price.toFixed(2)} SAR
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-1 bg-surface border border-border rounded p-0.5">
                        <button
                          onClick={() => updateQuantity(ci.product.id, -1)}
                          className="w-4 h-4 flex items-center justify-center text-text-dim hover:text-text-primary cursor-pointer"
                          aria-label="Decrease Quantity"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="font-mono text-xs px-1 font-bold">{ci.quantity}</span>
                        <button
                          onClick={() => updateQuantity(ci.product.id, 1)}
                          className="w-4 h-4 flex items-center justify-center text-text-dim hover:text-text-primary cursor-pointer"
                          aria-label="Increase Quantity"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(ci.product.id)}
                        className="text-text-dim hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        aria-label="Remove Item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Calculations & Checkout */}
              {cart.length > 0 && (
                <div className="border-t border-border pt-3 mt-3 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-text-dim">
                    <span>{isArabic ? "المجموع الفرعي:" : "Subtotal:"}</span>
                    <span>{subtotal.toFixed(2)} SAR</span>
                  </div>
                  <div className="flex justify-between text-text-dim">
                    <span>{isArabic ? "ضريبة القيمة المضافة (15%):" : "VAT (15%):"}</span>
                    <span>{vat.toFixed(2)} SAR</span>
                  </div>
                  <div className="flex justify-between text-text-dim">
                    <span>{isArabic ? "رسوم الشحن:" : "Shipping:"}</span>
                    <span className={isFreeShipping ? "text-emerald-400 font-bold" : ""}>
                      {isFreeShipping ? (isArabic ? "مجاني" : "FREE") : `${shippingFee.toFixed(2)} SAR`}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-text-primary border-t border-border/60 pt-1.5">
                    <span>{isArabic ? "الإجمالي النهائي:" : "Final Total:"}</span>
                    <span className="text-brand-gold">{finalTotal.toFixed(2)} SAR</span>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        setInvoiceModal(true);
                      }}
                      className="flex-1 py-2.5 rounded-lg bg-brand-gold text-surface-dark font-bold text-xs hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer"
                    >
                      <Receipt className="w-3.5 h-3.5" />
                      <span>{isArabic ? "إتمام الشراء ومحاكاة الفاتورة" : "Simulate Order & Invoice"}</span>
                    </button>
                    <button
                      onClick={clearCart}
                      className="p-2.5 rounded-lg bg-surface border border-border text-text-dim hover:text-rose-400 transition-colors cursor-pointer"
                      title={isArabic ? "إفراغ السلة" : "Empty Cart"}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ORDER INVOICE MODAL */}
        {invoiceModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 font-mono">
            <div className="w-full max-w-md bg-surface border border-brand-gold/40 rounded-xl p-5 shadow-2xl space-y-4 animate-fade-in">
              <div className="flex items-center justify-between border-b border-border pb-2.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-bold text-sm text-text-primary">
                    {isArabic ? "فاتورة طلب نوفا تيك الإلكترونية" : "NOVATECH DIGITAL INVOICE"}
                  </h3>
                </div>
                <button
                  onClick={() => setInvoiceModal(false)}
                  className="p-1 rounded hover:bg-surface-secondary text-text-dim cursor-pointer"
                  aria-label="Close Invoice"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-surface-secondary/60 p-3.5 rounded-lg text-xs space-y-2 border border-border">
                <div className="flex justify-between text-text-dim">
                  <span>INVOICE ID:</span>
                  <span className="font-bold text-text-primary">NOV-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between text-text-dim">
                  <span>TIMESTAMP:</span>
                  <span>{new Date().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-text-dim">
                  <span>PAYMENT METHOD:</span>
                  <span className="text-emerald-400">SIMULATED APPLE PAY // SUCCESS</span>
                </div>

                <div className="border-t border-dashed border-border/80 my-2 pt-2 space-y-1">
                  {cart.map((ci) => (
                    <div key={ci.product.id} className="flex justify-between text-[11px]">
                      <span className="truncate max-w-[200px]">
                        {ci.quantity}x {isArabic ? ci.product.nameAr : ci.product.nameEn}
                      </span>
                      <span>{(ci.product.price * ci.quantity).toFixed(2)} SAR</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-2 flex justify-between font-bold text-brand-gold text-xs">
                  <span>TOTAL AMOUNT:</span>
                  <span>{finalTotal.toFixed(2)} SAR</span>
                </div>
              </div>

              <div className="text-[11px] text-text-dim text-center">
                {isArabic
                  ? "تم إنشاء هذه الفاتورة الرقمية بنجاح داخل بيئة العرض التفاعلي."
                  : "Digital order and invoice generated in local client-side sandbox."}
              </div>

              <button
                onClick={() => {
                  setInvoiceModal(false);
                  clearCart();
                }}
                className="w-full py-2 bg-brand-gold text-surface-dark font-bold text-xs rounded-lg hover:brightness-110 transition-all font-mono cursor-pointer"
              >
                {isArabic ? "إغلاق وبدء جولة جديدة" : "Close & Reset Order"}
              </button>
            </div>
          </div>
        )}
      </div>
    </DemoShell>
  );
}
