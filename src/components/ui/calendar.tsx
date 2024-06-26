import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectContent, SelectTrigger } from "@radix-ui/react-select";
import { format, setMonth } from "date-fns";
import { TiArrowUnsorted } from "react-icons/ti";
import { Select, SelectItem, SelectValue } from "./select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-3 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "pt-2",
        caption_label:
          "text-sm font-medium absolute top-2 left-1/2 -translate-x-1/2 hidden",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-slate-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-slate-400",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-slate-800/50 dark:[&:has([aria-selected])]:bg-slate-800",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-slate-900 text-slate-50 hover:bg-slate-900 hover:text-slate-50 focus:bg-slate-900 focus:text-slate-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50 dark:hover:text-slate-900 dark:focus:bg-slate-50 dark:focus:text-slate-900",
        day_today:
          "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50",
        day_outside:
          "day-outside text-slate-500 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30 dark:text-slate-400 dark:aria-selected:bg-slate-800/50 dark:aria-selected:text-slate-400",
        day_disabled: "text-slate-500 opacity-50 dark:text-slate-400",
        day_range_middle:
          "aria-selected:bg-slate-100 aria-selected:text-slate-900 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50",
        day_hidden: "invisible",
        caption_dropdowns: "flex gap-2 justify-center items-center",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
        Dropdown: ({ ...props }) => {
          const { fromDate, fromMonth, fromYear, toDate, toMonth, toYear } =
            useDayPicker();
          const { goToMonth, currentMonth } = useNavigation();
          if (props.name === "months") {
            const selectItems = Array.from({ length: 12 }, (_, i) => ({
              value: i.toString(),
              label: format(setMonth(new Date(), i), "MMM"),
            }));
            return (
              <div className="w-full">
                <Select
                  onValueChange={(newValue) => {
                    const newDate = new Date(currentMonth);
                    newDate.setMonth(parseInt(newValue));
                    goToMonth(newDate);
                  }}
                  value={props.value?.toString()}
                >
                  <SelectTrigger className="cursor-pointer w-full border rounded flex justify-center items-center gap-2">
                    <SelectValue placeholder={format(currentMonth, "MMM")} />
                    <TiArrowUnsorted size={18} className="text-gray-400" />
                  </SelectTrigger>

                  <SelectContent className="bg-white z-50 rounded border border-t-0 w-[118px] h-[290px] overflow-y-scroll listScrollbar">
                    {selectItems.map((item, index) => (
                      <SelectItem
                        key={index}
                        value={item.value}
                        className="flex justify-center items-center hover:bg-gray-400 rounded-md duration-300 cursor-pointer text-center"
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            );
          } else if (props.name === "years") {
            const earliestYear =
              fromYear || fromMonth?.getFullYear() || fromDate?.getFullYear();
            const latestYear =
              toYear || toMonth?.getFullYear() || toDate?.getFullYear();

            let selectItems: { label: string; value: string }[] = [];

            if (earliestYear && latestYear) {
              const yearsLength = latestYear - earliestYear + 1;

              selectItems = Array.from({ length: yearsLength }, (_, i) => ({
                label: (earliestYear + i).toString(),
                value: (earliestYear + i).toString(),
              }));
            }

            return (
              <div className="w-full">
                <Select
                  onValueChange={(newValue) => {
                    const newDate = new Date(currentMonth);
                    newDate.setFullYear(parseInt(newValue));
                    goToMonth(newDate);
                  }}
                  value={props.value?.toString()}
                >
                  <SelectTrigger className="cursor-pointer w-full border rounded flex justify-center items-center gap-2">
                    <SelectValue placeholder={currentMonth.getFullYear()} />
                    <TiArrowUnsorted size={18} className="text-gray-400" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50 rounded border border-t-0 w-[118px] h-[260px] overflow-y-scroll listScrollbar">
                    {selectItems.map((item, index) => (
                      <SelectItem
                        key={index}
                        value={item.value}
                        className="flex justify-center items-center hover:bg-gray-400 rounded-md duration-300 cursor-pointer text-center"
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            );
          }
          return null;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
