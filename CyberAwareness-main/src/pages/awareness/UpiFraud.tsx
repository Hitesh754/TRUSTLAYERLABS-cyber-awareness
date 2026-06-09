import AwarenessCard from '../../components/awareness/AwarenessCard';
import { useTranslation } from 'react-i18next';
import TopicLayout from '../../components/awareness/TopicLayout';

export default function UpiFraud() {
  const { t } = useTranslation();
  return (
    <TopicLayout icon="💸" title={t("awareness.upi.title")} accentColor="#f97316"
      subtitle={t("awareness.upi.subtitle")}>
      <AwarenessCard title={t("awareness.upi.card1Title")} color="red" items={[
        "Fake 'collect request' — scammer sends a request disguised as a refund or prize",
        "Screen mirroring apps (AnyDesk, TeamViewer) used to watch and steal your UPI PIN",
        "Fake customer care numbers on Google for banks and UPI apps",
        "OLX/Quikr scams — fake buyers send collect requests instead of paying you",
        "Lottery/prize scams asking you to 'pay a small fee' via UPI to claim winnings",
      ]} />
      <AwarenessCard title={t("awareness.upi.card2Title")} color="green" items={[
        "ENTERING your UPI PIN means you are PAYING — never enter PIN to 'receive' money",
        "Never share your UPI PIN, OTP, or QR code with anyone, ever",
        "Do not install screen-sharing apps at anyone's request",
        "Verify customer care numbers only from the official bank website or app",
        "Set a daily UPI transaction limit in your banking app settings",
      ]} />
      <AwarenessCard title={t("awareness.upi.card3Title")} color="cyan" items={[
        "NPCI regulates UPI — report fraud at npci.org.in",
        "File complaint at cybercrime.gov.in or call 1930 within the golden hour",
        "Freeze your account immediately via your bank's helpline if defrauded",
        "Keep UPI app notifications ON to detect unauthorized transactions instantly",
      ]} />
    </TopicLayout>
  );
}
