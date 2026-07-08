import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronsUpDown } from "lucide-react";
import CategoryIcon from "../product/CategoryIcon";

function Select({ value, onChange, options }) {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <div className="relative z-[999] w-full sm:w-64">

          {/* Button */}
          <ListboxButton className="group flex w-full items-center justify-between rounded-2xl border border-white/30 bg-white/50 px-4 py-3.5 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:bg-white/70 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/50 dark:hover:bg-slate-800/70">
            <div className="flex items-center gap-3">
              <CategoryIcon category={value} />
              <span className="font-medium text-gray-700 dark:text-white">
                {value === "all" ? "همه دسته‌بندی‌ها" : value}
              </span>
            </div>

            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronsUpDown size={18} className="text-gray-500 dark:text-gray-300" />
            </motion.div>
          </ListboxButton>

          {/* Dropdown */}
          <AnimatePresence>
            {open && (
              <ListboxOptions as="div">
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 right-0 top-full z-[9999] mt-3 overflow-hidden rounded-3xl border border-white/20 bg-white/90 shadow-[0_25px_60px_rgba(0,0,0,.18)] backdrop-blur-3xl dark:border-white/10 dark:bg-slate-900/90"
                >
                  {options.map((option) => (
                    <ListboxOption
                      key={option}
                      value={option}
                      className={({ focus }) =>
                        `cursor-pointer rounded-2xl transition-all duration-200 ${
                          focus ? "bg-rose-100 dark:bg-rose-500/20" : ""
                        }`
                      }
                    >
                      {({ selected }) => (
                        <div className="flex items-center justify-between px-4 py-3">
                          <div className="flex items-center gap-3">
                            <CategoryIcon category={option} />
                            <span className="font-medium text-gray-700 dark:text-white">
                              {option === "all" ? "همه دسته‌بندی‌ها" : option}
                            </span>
                          </div>

                          <AnimatePresence>
                            {selected && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0 }}
                              >
                                <Check size={18} className="text-rose-500" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </ListboxOption>
                  ))}
                </motion.div>
              </ListboxOptions>
            )}
          </AnimatePresence>
        </div>
      )}
    </Listbox>
  );
}

export default Select;