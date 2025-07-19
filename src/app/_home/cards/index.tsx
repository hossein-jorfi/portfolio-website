import { CardsActivityGoal } from "@/app/_home/cards/activity-goal";
import { CardsCalendar } from "@/app/_home/cards/calendar";
import { CardsChat } from "@/app/_home/cards/chat";
import { CardsCookieSettings } from "@/app/_home/cards/cookie-settings";
import { CardsCreateAccount } from "@/app/_home/cards/create-account";
import { CardsExerciseMinutes } from "@/app/_home/cards/exercise-minutes";
import { CardsForms } from "@/app/_home/cards/forms";
import { CardsPayments } from "@/app/_home/cards/payments";
import { CardsReportIssue } from "@/app/_home/cards/report-issue";
import { CardsShare } from "@/app/_home/cards/share";
import { CardsStats } from "@/app/_home/cards/stats";
import { CardsTeamMembers } from "@/app/_home/cards/team-members";

export function CardsDemo() {
  return (
    <div className="md:grids-col-2 grid **:data-[slot=card]:shadow-none md:gap-4 lg:grid-cols-10 xl:grid-cols-11 mt-30">
      <div className="grid gap-4 lg:col-span-4 xl:col-span-6">
        <CardsStats />
        <div className="grid gap-1 sm:grid-cols-[auto_1fr] md:hidden">
          <CardsCalendar />
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-4">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-4">
            <CardsExerciseMinutes />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-4">
            <CardsForms />
            <CardsTeamMembers />
            <CardsCookieSettings />
          </div>
          <div className="flex flex-col gap-4">
            <CardsCreateAccount />
            <CardsChat />
            <div className="hidden xl:block">
              <CardsReportIssue />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-6 xl:col-span-5">
        <div className="hidden gap-1 sm:grid-cols-[auto_1fr] md:grid">
          <CardsCalendar />
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-3">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-3">
            <CardsExerciseMinutes />
          </div>
        </div>
        <div className="hidden md:block">
          <CardsPayments />
        </div>
        <CardsShare />
        <div className="xl:hidden">
          <CardsReportIssue />
        </div>
      </div>
    </div>
  );
}
