import { useState, useEffect } from "react";
import {
  Mail,
  Check,
  Star,
  Sparkles,
  Zap,
  Palette,
  Settings,
  GraduationCap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image_icon from "@/imports/icon.png";
import avatarImage from "@/imports/icon.png";
import coconalaImage from "@/imports/__________2026-06-12_182642.png";
import questImage from "@/imports/quest_.png";
import gabuImage from "@/imports/00_top_re20251025.png";
import buffyImage from "@/imports/HL-axOba4AAQhxF.jpeg";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden sm:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-purple-100 transition-colors"
    >
      <ChevronRight className="w-6 h-6 text-purple-600" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden sm:block absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-purple-100 transition-colors"
    >
      <ChevronLeft className="w-6 h-6 text-purple-600" />
    </button>
  );
}

export default function App() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    document.title = "桃月みつきのおすみつき | VRChatアバター改変代行";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "VRChatエンジニア・桃月みつきによるアバター改変代行サービス。衣装着せ替え・軽量化・Quest対応・ギミック実装など。ココナラ実績150件以上。");
    setMeta("keywords", "VRChat,アバター改変,改変代行,桃月みつき,Quest対応,軽量化,ギミック,Unity");
    setMeta("author", "桃月みつき");
    setMeta("robots", "index, follow");
    setMeta("google-site-verification", "BBTbGP60FZt-n36Ztb0trlhCHUkeS1uVhpWPwHfMlv0");
    setMeta("og:type", "website", true);
    setMeta("og:title", "桃月みつきのおすみつき | VRChatアバター改変代行", true);
    setMeta("og:description", "VRChatエンジニア・桃月みつきによるアバター改変代行サービス。衣装着せ替え・軽量化・Quest対応・ギミック実装など。ココナラ実績150件以上。", true);
    setMeta("og:url", "https://mitsukiosumitsuki.github.io/", true);
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", "桃月みつきのおすみつき | VRChatアバター改変代行");
    setMeta("twitter:description", "VRChatエンジニア・桃月みつきによるアバター改変代行。ギミック・軽量化・Quest対応など実績150件以上。");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToShow = isPortrait ? 1 : 3;

  const servicesSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const portfolioSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              <span className="sm:hidden">桃月みつきの<br />おすみつき</span>
              <span className="hidden sm:inline">桃月みつきのおすみつき</span>
            </h1>
            <div className="space-y-4 text-lg text-gray-700 mb-8">
              <p>Unityが全然分からない…</p>
              <p>服を着せたいのにできない…</p>
              <p className="text-xl mt-6">
                そんな悩み、ありませんか?
              </p>
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <ImageWithFallback
                  src={image_icon}
                  alt="桃月みつき"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VRChatエンジニアの桃月みつきが解決します!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            できること
          </h2>
          <div className="relative px-10 pb-12">
            <Slider
              key={`services-${slidesToShow}`}
              {...servicesSettings}
            >
              <div className="px-3">
                <ServiceCard
                  icon={<Sparkles className="w-8 h-8" />}
                  title="キャラクター風改変"
                  description="あなたのアバターを理想のキャラクターに"
                />
              </div>
              <div className="px-3">
                <ServiceCard
                  icon={<Zap className="w-8 h-8" />}
                  title="軽量化"
                  description="VeryPoor → Medium へ最適化"
                />
              </div>
              <div className="px-3">
                <ServiceCard
                  icon={<Check className="w-8 h-8" />}
                  title="Quest対応"
                  description="インポスター → 対応アバターへ変換"
                />
              </div>
              <div className="px-3">
                <ServiceCard
                  icon={<Palette className="w-8 h-8" />}
                  title="非対応衣装の対応"
                  description="もちふぃったー使用で様々なアバターに対応"
                />
              </div>
              <div className="px-3">
                <ServiceCard
                  icon={<Settings className="w-8 h-8" />}
                  title="ギミック実装"
                  description="衣装切り替え、アイテム出し入れ、複雑な条件遷移まで"
                />
              </div>
              <div className="px-3">
                <ServiceCard
                  icon={<GraduationCap className="w-8 h-8" />}
                  title="改変指導"
                  description="Discordにて画面共有でサポート"
                />
              </div>
            </Slider>
          </div>
          <p className="sm:hidden text-center text-sm text-gray-400 mt-2 flex items-center justify-center gap-1">
            <span>←</span> スワイプで切り替え <span>→</span>
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            実績一覧
          </h2>
          <div className="relative px-10 pb-12">
            <Slider
              key={`portfolio-${slidesToShow}`}
              {...portfolioSettings}
            >
              <div className="px-3">
                <PortfolioCard
                  image={gabuImage}
                  title="天兎ひなた様制作アバター「がぶ」のVRChatセットアップ"
                />
              </div>
              <div className="px-3">
                <PortfolioCard
                  image={buffyImage}
                  title="ふてみみ様製作アバター「バフィー」のギミック作成"
                />
              </div>
              <div className="px-3">
                <PortfolioCard
                  image={coconalaImage}
                  title="ココナラでの同改変サービス　実績150件以上"
                  objectFit="contain"
                />
              </div>
              <div className="px-3">
                <PortfolioCard
                  image={questImage}
                  title="軽量化・Quest対応"
                />
              </div>
            </Slider>
          </div>
          <p className="sm:hidden text-center text-sm text-gray-400 mt-2 flex items-center justify-center gap-1">
            <span>←</span> スワイプで切り替え <span>→</span>
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            料金表
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl">
            <div className="space-y-4">
              <PriceRow
                label="基本料金"
                price="3,000円"
                highlight
              />
              <PriceRow
                label="衣装着せ替え"
                price="1着につき1,000円"
              />
              <PriceRow
                label="非対応衣装着せ替え"
                price="1着につき3,000円"
              />
              <PriceRow
                label="マテリアル、テクスチャ改変"
                price="1着につき1,000円"
              />
              <PriceRow
                label="ギミック実装"
                price="1,000円～"
              />
              <PriceRow label="改変指導" price="3,000円〜" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            実際の流れ
          </h2>
          <div className="space-y-8">
            <ProcessStep
              number="1"
              title="依頼メールを送る"
              description="例: ◯◯のアバターの改変についての相談"
              details={[
                "◯◯に衣装を着せたいです。",
                "衣装のパーツごとにオンオフ切り替え、△△のアイテムを手に持たせて欲しいです",
              ]}
            />
            <ProcessStep
              number="2"
              title="1〜3日後に見積もりの返信"
              description="ご相談ありがとうございます。料金は以下の通りです。"
              details={[
                "基本料金　◯◯円",
                "衣装対応　◯◯円",
                "計　　　　◯◯円",
                "◯月◯日までに納品いたします。",
              ]}
            />
            <ProcessStep
              number="3"
              title="改変のデータを確認"
            />
            <ProcessStep
              number="4"
              title="ご承諾いただいた後、お支払い及び納品"
            />
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            注意事項
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
            <TermItem text="改変に使用するアイテムはギフトしていただく必要があります" />
            <TermItem text="改変代行の場合、新規での改変になります" />
            <TermItem text="やり取りはDiscord上での対応になります" />
            <TermItem text="こちら都合でのキャンセルは返金いたしますが、お客様都合でのキャンセルに関してはギフト分の返金は致しかねます" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Mail className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl mb-6">お問い合わせ</h2>
          <p className="text-xl mb-8">お気軽にご相談ください</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScghoHZoMRjbJ-TgID4IzoWuSQPBlStiKLy6ruYq-fU4QCvxg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center gap-2 mx-auto w-fit"
          >
            お問い合わせはこちら
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2026 桃月みつき VRChat改変代行</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  image,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 h-full flex flex-col">
      {image && (
        <div className="mb-4 h-48 rounded-lg overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="text-purple-600 mb-4 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-xl mb-2 flex-shrink-0">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
}

function PortfolioCard({
  image,
  title,
  objectFit = "contain",
}: {
  image: string;
  title: string;
  objectFit?: "cover" | "contain";
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="h-64 overflow-hidden flex-shrink-0">
        <ImageWithFallback
          src={image}
          alt={title}
          className={`w-full h-full hover:scale-105 transition-transform ${objectFit === "cover" ? "object-cover" : "object-contain"}`}
        />
      </div>
      <div className="p-4 flex-grow flex items-center justify-center">
        <h3 className="text-xl text-center">{title}</h3>
      </div>
    </div>
  );
}

function PriceRow({
  label,
  price,
  highlight,
}: {
  label: string;
  price: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg ${highlight ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "bg-white"}`}
    >
      <span className="text-lg">{label}</span>
      <span
        className={`text-xl ${highlight ? "" : "text-purple-600"}`}
      >
        {price}
      </span>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
  details,
}: {
  number: string;
  title: string;
  description?: string;
  details?: string[];
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center text-2xl shadow-lg">
          {number}
        </div>
      </div>
      <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl mb-2 text-purple-600">
          {title}
        </h3>
        {description && (
          <p className="text-gray-700 mb-2">{description}</p>
        )}
        {details && (
          <ul className="space-y-1 text-gray-600">
            {details.map((detail, index) => (
              <li key={index}>・{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function TermItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
      <p className="text-lg text-gray-700">{text}</p>
    </div>
  );
}