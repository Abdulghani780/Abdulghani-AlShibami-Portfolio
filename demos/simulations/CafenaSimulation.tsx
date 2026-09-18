"use client";

import React, { useState } from "react";
import { DemoShell } from "@/demos/shared/DemoShell";
import { DemoProps } from "@/demos/registry";
import {
  Coffee,
  ShoppingBag,
  Search,
  Plus,
  Minus,
  Trash2,
  X,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Star,
  Send,
  Receipt,
  Heart,
} from "lucide-react";

interface MenuItem {
  id: string;
  nameEn: string;
  nameAr: string;
  category: "hot" | "cold" | "beans" | "pastries";
  price: number;
  rating: number;
  descriptionEn: string;
  descriptionAr: string;
  badgeEn?: string;
  badgeAr?: string;
  imageEmoji: string;
}

interface CartItem {
  item: MenuItem;
  quantity: number;
}

export function CafenaSimulation({ locale = "en", isRtl = false }: DemoProps) {
  const isArabic = locale === "ar";

  const MENU_ITEMS: MenuItem[] = [
    {
      id: "c1",
      nameEn: "Single Origin Espresso",
      nameAr: "إسبريسو فردي المصدر",
      category: "hot",
      price: 15.99,
      rating: 4.9,
      descriptionEn: "Intense double shot roasted from high-altitude Ethiopian beans with floral and citrus notes.",
      descriptionAr: "شوت مزدوج مركز ومحمص من حبوب بن إثيوبية عالية الارتفاع بنكهات زهرية وحمضية متوازنة.",
      badgeEn: "Signature",
      badgeAr: "مشروب التوقيع",
      imageEmoji: "☕",
    },
    {
      id: "c2",
      nameEn: "Artisanal Cappuccino",
      nameAr: "كابتشينو حرفي مخملي",
      category: "hot",
      price: 18.99,
      rating: 4.8,
      descriptionEn: "Velvety steamed whole milk over rich double espresso dusted with organic cocoa powder.",
      descriptionAr: "حليب طازج مبخر بقوام مخملي فوق إسبريسو مزدوج غني ومرشوش ببودرة الكاكاو العضوية.",
      badgeEn: "Best Seller",
      badgeAr: "الأكثر طلباً",
      imageEmoji: "☕",
    },
    {
      id: "c3",
      nameEn: "Spanish Caramel Latte",
      nameAr: "لاتيه إسباني بالكراميل",
      category: "hot",
      price: 20.99,
      rating: 4.9,
      descriptionEn: "Smooth espresso blended with artisanal sweet condensed milk and homemade salted caramel drizzle.",
      descriptionAr: "إسبريسو سلس ممزوج بالحليب المكثف المحلي مع لمسات من صوص الكراميل المملح الخاص.",
      imageEmoji: "🥛",
    },
    {
      id: "c4",
      nameEn: "Specialty V60 Pour Over",
      nameAr: "قهوة مقطرة فاخرة V60",
      category: "hot",
      price: 24.0,
      rating: 5.0,
      descriptionEn: "Precision pour-over extract featuring Harazi heirloom beans with complex black currant and honey aroma.",
      descriptionAr: "استخلاص يدوي دقيق لحبوب البن الحرازي الأصيل بإيحاءات الكشمش الأسود والعسل الطبيعي.",
      badgeEn: "Reserve",
      badgeAr: "إصدار خاص",
      imageEmoji: "🫗",
    },
    {
      id: "c5",
      nameEn: "Cold Brew Reserve 24H",
      nameAr: "كولد برو منقوع ٢٤ ساعة",
      category: "cold",
      price: 22.5,
      rating: 4.8,
      descriptionEn: "Slow-steeped cold water extraction for 24 hours resulting in low acidity and smooth chocolate finish.",
      descriptionAr: "استخلاص بطيء بالماء البارد لمدة ٢٤ ساعة لإنتاج قهوة خالية من المرارة بنكهات الشوكولاتة الداكنة.",
      badgeEn: "Summer Pick",
      badgeAr: "مفضل الصيف",
      imageEmoji: "🧊",
    },
    {
      id: "c6",
      nameEn: "Iced Pistachio Latte",
      nameAr: "لاتيه الفستق المثلج",
      category: "cold",
      price: 25.0,
      rating: 4.7,
      descriptionEn: "Chilled fresh milk, authentic Iranian pistachio butter infusion, and a float of double espresso over ice.",
      descriptionAr: "حليب بارد ممزوج بكريمة الفستق الطبيعي الفاخرة مع شوت إسبريسو مسكوب بعناية فوق مكعبات الثلج.",
      imageEmoji: "🥤",
    },
    {
      id: "c7",
      nameEn: "Harazi Micro-Lot Beans 250g",
      nameAr: "بن حرازي ميكرولوت ٢٥٠ جم",
      category: "beans",
      price: 65.0,
      rating: 5.0,
      descriptionEn: "Heirloom specialty coffee beans naturally sun-dried on African raised beds in the Harazi highlands.",
      descriptionAr: "حبوب بن مختصة مجففة طبيعياً تحت أشعة الشمس على أسرة إفريقية في مرتفعات حراز الشاهقة.",
      badgeEn: "Micro-Lot",
      badgeAr: "محصول نادر",
      imageEmoji: "🫘",
    },
    {
      id: "c8",
      nameEn: "Ethiopian Yirgacheffe 250g",
      nameAr: "بن إثيوبي يرغاتشيف ٢٥٠ جم",
      category: "beans",
      price: 58.0,
      rating: 4.9,
      descriptionEn: "Washed process Arabica with bright bergamot acidity, jasmine floral notes, and peach sweetness.",
      descriptionAr: "معالجة مغسولة تتميز بحمضية البرغموت المنعشة ونوتات الياسمين وحلاوة الخوخ الطازج.",
      imageEmoji: "🫘",
    },
    {
      id: "c9",
      nameEn: "Fresh Almond Croissant",
      nameAr: "كرواسون اللوز الطازج",
      category: "pastries",
      price: 16.5,
      rating: 4.8,
      descriptionEn: "Flaky buttery French pastry filled with rich almond frangipane and topped with toasted sliced almonds.",
      descriptionAr: "معجنات فرنسية هشة ومقرمشة بالزبدة الطبيعية ومحشوة بكريمة اللوز ومغطاة بشرائح اللوز المحمص.",
      imageEmoji: "🥐",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([
    { item: MENU_ITEMS[0], quantity: 1 },
    { item: MENU_ITEMS[3], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [receiptModal, setReceiptModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"menu" | "story" | "contact">("menu");
  const [contactFeedback, setContactFeedback] = useState<string | null>(null);

  // Cart operations
  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const vat = subtotal * 0.15;
  const total = subtotal + vat;
  const totalCartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  // Filtered menu
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameAr.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  const handleReset = () => {
    setCart([
      { item: MENU_ITEMS[0], quantity: 1 },
      { item: MENU_ITEMS[3], quantity: 1 },
    ]);
    setSelectedCategory("all");
    setSearchQuery("");
    setIsCartOpen(false);
    setReceiptModal(false);
    setActiveTab("menu");
    setContactFeedback(null);
  };

  return (
    <DemoShell
      title={isArabic ? "كافينا — مقهى القهوة الذهبية المختصة" : "Cafena — Artisanal Specialty Coffee Experience"}
      categoryName={isArabic ? "تطبيقات الويب والتجارة الإلكترونية" : "Web Platforms"}
      projectSlug="cafena"
      locale={locale}
      disclaimer={{
        en: "This interactive showcase demonstrates the verified client-side web application of Cafena. All cart calculations, search indexing, and order receipts run locally in the browser sandbox.",
        ar: "هذا العرض التفاعلي يحاكي تطبيق الويب المعتمد لكافينا (مقهى القهوة الذهبية). كافة عمليات السلة والبحث وحسابات الضرائب والفواتير تعمل محلياً داخل المتصفح.",
      }}
      onReset={handleReset}
      statusText="SANDBOX: OPERATIONAL"
      statusItems={[
        { label: isArabic ? "العناصر بالسلة" : "CART ITEMS", value: `${totalCartCount}` },
        { label: isArabic ? "الإجمالي" : "TOTAL", value: `${total.toFixed(2)} SAR` },
      ]}
      toolbarActions={
        <div className="flex items-center gap-2">
          {/* Quick Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-1.5 rounded-lg bg-surface border border-border text-brand-gold hover:bg-brand-gold/10 transition-colors"
            title={isArabic ? "سلة المشتريات" : "Shopping Cart"}
          >
            <ShoppingBag className="w-4 h-4" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-surface-dark text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      }
    >
      <div className="relative p-3 sm:p-6 bg-surface text-text-primary min-h-[580px] flex flex-col font-sans">
        {/* Navigation Tabs Header */}
        <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-5 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold text-lg shadow-sm">
              ☕
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                <span>{isArabic ? "مقهى القهوة الذهبية" : "CAFENA ROASTERS"}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                  EST. 2024
                </span>
              </div>
              <p className="text-[11px] text-text-dim">
                {isArabic ? "أجود حبوب البن المختصة المحمصة طازجاً" : "Artisanal Specialty Coffee & Micro-Lot Roastery"}
              </p>
            </div>
          </div>

          {/* Navigation Pill Switcher */}
          <div className="flex items-center gap-1 bg-surface-secondary/70 p-1 rounded-lg border border-border text-xs font-medium">
            <button
              onClick={() => setActiveTab("menu")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === "menu"
                  ? "bg-brand-gold text-surface-dark font-bold shadow"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {isArabic ? "قائمة المشروبات" : "Coffee Menu"}
            </button>
            <button
              onClick={() => setActiveTab("story")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === "story"
                  ? "bg-brand-gold text-surface-dark font-bold shadow"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {isArabic ? "عن كافينا" : "Our Roastery"}
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === "contact"
                  ? "bg-brand-gold text-surface-dark font-bold shadow"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {isArabic ? "حجز طاولة وتواصل" : "Reservations"}
            </button>
          </div>
        </div>

        {/* TAB 1: MENU & E-COMMERCE CATALOG */}
        {activeTab === "menu" && (
          <div className="flex-1 flex flex-col gap-5">
            {/* Search & Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface-secondary/40 p-3 rounded-xl border border-border">
              {/* Category Filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
                {[
                  { id: "all", en: "All Offerings", ar: "جميع الأصناف" },
                  { id: "hot", en: "Hot Brews", ar: "مشروبات ساخنة" },
                  { id: "cold", en: "Cold Brews", ar: "مشروبات باردة" },
                  { id: "beans", en: "Specialty Beans", ar: "محاصيل وحبوب" },
                  { id: "pastries", en: "Bakery", ar: "مخبوزات" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors text-xs font-mono ${
                      selectedCategory === cat.id
                        ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 font-bold"
                        : "bg-surface border border-border/70 text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {isArabic ? cat.ar : cat.en}
                  </button>
                ))}
              </div>

              {/* Instant Search Box */}
              <div className="relative min-w-[220px]">
                <Search className="w-3.5 h-3.5 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 text-text-dim" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isArabic ? "ابحث عن مشروب أو محصول..." : "Search coffee or roast..."}
                  className="w-full bg-surface border border-border rounded-lg pl-8 pr-3 rtl:pl-3 rtl:pr-8 py-1.5 text-xs text-text-primary placeholder:text-text-dim focus:outline-none focus:border-brand-gold/50 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute top-1/2 -translate-y-1/2 right-2.5 rtl:right-auto rtl:left-2.5 text-text-dim hover:text-text-primary"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredItems.map((item) => {
                const inCart = cart.find((ci) => ci.item.id === item.id);
                return (
                  <div
                    key={item.id}
                    className="bg-surface-secondary/40 border border-border hover:border-brand-gold/40 rounded-xl p-3.5 flex flex-col justify-between transition-all group hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                          {item.imageEmoji}
                        </div>
                        {item.badgeEn && (
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                            {isArabic ? item.badgeAr : item.badgeEn}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span className="font-bold">{item.rating}</span>
                        <span className="text-text-dim text-[10px]">/ 5.0</span>
                      </div>

                      <h3 className="font-bold text-xs sm:text-sm text-text-primary mb-1">
                        {isArabic ? item.nameAr : item.nameEn}
                      </h3>
                      <p className="text-[11px] text-text-dim leading-relaxed line-clamp-2 mb-3">
                        {isArabic ? item.descriptionAr : item.descriptionEn}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-brand-gold">
                        {item.price.toFixed(2)} <span className="text-[10px] text-text-muted">SAR</span>
                      </div>

                      {inCart ? (
                        <div className="flex items-center gap-1.5 bg-surface border border-border rounded-lg p-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-5 h-5 rounded flex items-center justify-center text-text-dim hover:text-text-primary hover:bg-surface-secondary transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold px-1.5">{inCart.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-5 h-5 rounded flex items-center justify-center text-text-dim hover:text-text-primary hover:bg-surface-secondary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="py-1 px-2.5 rounded-lg bg-brand-gold text-surface-dark text-xs font-bold font-mono hover:brightness-110 active:scale-95 transition-all flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" />
                          <span>{isArabic ? "إضافة" : "Add"}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <div className="p-8 text-center text-text-dim text-xs font-mono">
                {isArabic ? "لا توجد نتائج مطابقة لبحثك." : "No coffee offerings match your criteria."}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: STORY / ROASTERY SHOWCASE */}
        {activeTab === "story" && (
          <div className="flex-1 flex flex-col gap-6 max-w-2xl mx-auto py-4">
            <div className="bg-surface-secondary/40 border border-border rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-brand-gold font-mono text-xs">
                <Sparkles className="w-4 h-4" />
                <span>{isArabic ? "فلسفة التحميص الحرفي" : "THE CAFENA ROASTING PHILOSOPHY"}</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold">
                {isArabic
                  ? "من مزارع المرتفعات العالية إلى فنجانك اليومي"
                  : "From High-Altitude Harvests to Your Daily Cup"}
              </h2>
              <p className="text-xs sm:text-sm text-text-dim leading-relaxed">
                {isArabic
                  ? "تأسس مقهى القهوة الذهبية (كافينا) بشغف عميق لنشر ثقافة القهوة المختصة في العالم العربي. نحرص على انتقاء حبوب البن الخضراء مباشرة من مزارع حراز وإثيوبيا وكولومبيا، وتحميصها بدقة متناهية للحفاظ على الخصائص الطبيعية الفريدة لكل محصول."
                  : "Cafena was built on an uncompromising passion for specialty coffee culture. We ethically source micro-lots directly from smallholder farms in Yemen, Ethiopia, and Colombia, roasting each batch with meticulous thermodynamic profiles to highlight intrinsic tasting notes."}
              </p>

              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border text-center font-mono">
                <div className="p-2.5 rounded-lg bg-surface border border-border">
                  <div className="text-base sm:text-lg font-bold text-brand-gold">100%</div>
                  <div className="text-[10px] text-text-dim">{isArabic ? "أرابيكا مختصة" : "Specialty Arabica"}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-surface border border-border">
                  <div className="text-base sm:text-lg font-bold text-brand-gold">86+</div>
                  <div className="text-[10px] text-text-dim">{isArabic ? "تقييم الجودة SCA" : "SCA Cupping Score"}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-surface border border-border">
                  <div className="text-base sm:text-lg font-bold text-brand-gold">48H</div>
                  <div className="text-[10px] text-text-dim">{isArabic ? "أقصى زمن تحميص" : "Fresh Roast Window"}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONTACT & RESERVATION */}
        {activeTab === "contact" && (
          <div className="flex-1 flex flex-col gap-4 max-w-lg mx-auto py-2 w-full">
            <div className="bg-surface-secondary/40 border border-border rounded-xl p-5">
              <h3 className="font-bold text-sm sm:text-base mb-1">
                {isArabic ? "حجز طاولة أو استفسار خاص" : "Table Reservation & Inquiries"}
              </h3>
              <p className="text-xs text-text-dim mb-4 leading-relaxed">
                {isArabic
                  ? "يسعدنا استقبالك في مقهانا أو الإجابة على أي استفسارات تتعلق بالمحاصيل والطلبات الخاصة."
                  : "Book a tasting table or get in touch for custom event catering and specialty bean orders."}
              </p>

              {contactFeedback ? (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{contactFeedback}</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactFeedback(
                      isArabic
                        ? "تم استلام طلبك بنجاح! شكراً لتواصلك مع مقهى كافينا."
                        : "Your reservation request has been received. Thank you for choosing Cafena!"
                    );
                  }}
                  className="space-y-3 text-xs"
                >
                  <div>
                    <label className="block text-text-muted text-[11px] mb-1 font-mono">
                      {isArabic ? "الاسم الكامل" : "Full Name"}
                    </label>
                    <input
                      required
                      defaultValue="Ahmad Al-Mansoor"
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold/50"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-[11px] mb-1 font-mono">
                      {isArabic ? "رقم الهاتف" : "Phone Number"}
                    </label>
                    <input
                      required
                      defaultValue="+966 50 123 4567"
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold/50 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-[11px] mb-1 font-mono">
                      {isArabic ? "عدد الضيوف وملاحظات الحجز" : "Party Size & Special Notes"}
                    </label>
                    <textarea
                      rows={2}
                      defaultValue={isArabic ? "حجز طاولة لـ شخصين لتجربة قهوة V60 الحرازية" : "Table for 2 to experience the V60 Harazi pour-over."}
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-brand-gold text-surface-dark font-bold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isArabic ? "إرسال طلب الحجز" : "Submit Reservation"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* OFFCANVAS SHOPPING CART DRAWER */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
            <div className="w-full max-w-sm bg-surface border-l rtl:border-l-0 rtl:border-r border-border h-full flex flex-col p-4 sm:p-5 shadow-2xl animate-fade-in">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-brand-gold" />
                  <h3 className="font-bold text-sm font-mono">
                    {isArabic ? "سلة المشتريات" : "Shopping Cart"} ({totalCartCount})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-lg hover:bg-surface-secondary text-text-dim hover:text-text-primary"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
                {cart.map((ci) => (
                  <div
                    key={ci.item.id}
                    className="p-2.5 rounded-lg bg-surface-secondary/40 border border-border flex items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg shrink-0">{ci.item.imageEmoji}</span>
                      <div className="truncate">
                        <div className="font-bold text-text-primary truncate">
                          {isArabic ? ci.item.nameAr : ci.item.nameEn}
                        </div>
                        <div className="text-[11px] font-mono text-brand-gold">
                          {ci.item.price.toFixed(2)} SAR
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-1 bg-surface border border-border rounded p-0.5">
                        <button
                          onClick={() => updateQuantity(ci.item.id, -1)}
                          className="w-4 h-4 flex items-center justify-center text-text-dim hover:text-text-primary"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="font-mono text-xs px-1 font-bold">{ci.quantity}</span>
                        <button
                          onClick={() => updateQuantity(ci.item.id, 1)}
                          className="w-4 h-4 flex items-center justify-center text-text-dim hover:text-text-primary"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(ci.item.id)}
                        className="text-text-dim hover:text-rose-400 p-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {cart.length === 0 && (
                  <div className="py-12 text-center text-xs text-text-dim font-mono">
                    {isArabic ? "سلة المشتريات فارغة حالياً." : "Your shopping cart is currently empty."}
                  </div>
                )}
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
                  <div className="flex justify-between font-bold text-sm text-text-primary border-t border-border/60 pt-1.5">
                    <span>{isArabic ? "الإجمالي النهائي:" : "Final Total:"}</span>
                    <span className="text-brand-gold">{total.toFixed(2)} SAR</span>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        setReceiptModal(true);
                      }}
                      className="flex-1 py-2.5 rounded-lg bg-brand-gold text-surface-dark font-bold text-xs hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow"
                    >
                      <Receipt className="w-3.5 h-3.5" />
                      <span>{isArabic ? "تأكيد الطلب والمحاكاة" : "Simulate Checkout"}</span>
                    </button>
                    <button
                      onClick={clearCart}
                      className="p-2.5 rounded-lg bg-surface border border-border text-text-dim hover:text-rose-400 transition-colors"
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

        {/* ORDER RECEIPT MODAL */}
        {receiptModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-surface border border-brand-gold/40 rounded-xl p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-bold text-sm font-mono text-text-primary">
                    {isArabic ? "إيصال طلب المحاكاة الإلكتروني" : "Order Receipt Preview"}
                  </h3>
                </div>
                <button
                  onClick={() => setReceiptModal(false)}
                  className="p-1 rounded hover:bg-surface-secondary text-text-dim"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-surface-secondary/60 p-3.5 rounded-lg font-mono text-xs space-y-2 border border-border">
                <div className="flex justify-between text-text-dim">
                  <span>RECEIPT NO:</span>
                  <span className="font-bold text-text-primary">CAF-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between text-text-dim">
                  <span>DATE:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-text-dim">
                  <span>DISPATCH:</span>
                  <span className="text-emerald-400">COUNTER PICKUP // READY</span>
                </div>

                <div className="border-t border-dashed border-border/80 my-2 pt-2 space-y-1">
                  {cart.map((ci) => (
                    <div key={ci.item.id} className="flex justify-between text-[11px]">
                      <span className="truncate max-w-[200px]">
                        {ci.quantity}x {isArabic ? ci.item.nameAr : ci.item.nameEn}
                      </span>
                      <span>{(ci.item.price * ci.quantity).toFixed(2)} SAR</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-2 flex justify-between font-bold text-brand-gold text-xs">
                  <span>TOTAL PAID:</span>
                  <span>{total.toFixed(2)} SAR</span>
                </div>
              </div>

              <div className="text-[11px] text-text-dim text-center">
                {isArabic
                  ? "تمت معالجة هذه الفاتورة بنجاح داخل بيئة المحاكاة المحلية."
                  : "Simulated order processed successfully in local sandbox storage."}
              </div>

              <button
                onClick={() => {
                  setReceiptModal(false);
                  clearCart();
                }}
                className="w-full py-2 bg-brand-gold text-surface-dark font-bold text-xs rounded-lg hover:brightness-110 transition-all"
              >
                {isArabic ? "إغلاق وبدء طلب جديد" : "Close & Start New Order"}
              </button>
            </div>
          </div>
        )}
      </div>
    </DemoShell>
  );
}
