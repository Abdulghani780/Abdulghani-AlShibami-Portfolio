"use client";

import React, { useState, useEffect, useRef } from "react";
import { DemoShell } from "@/demos/shared/DemoShell";
import { DemoProps } from "@/demos/registry";
import { Play, Pause, SkipForward, RotateCcw, BarChart3, Clock, Zap } from "lucide-react";

type AlgorithmType = "quicksort" | "bubblesort" | "insertionsort";

interface SortingStep {
  array: number[];
  comparingIndices: number[];
  swappingIndices: number[];
  sortedIndices: number[];
  comparisons: number;
  swaps: number;
}

export function MetaAlgorithmLabSimulation({ locale = "en", isRtl = false }: DemoProps) {
  const defaultArray = [42, 18, 75, 23, 89, 12, 54, 33, 91, 62, 28, 47, 68, 15, 80];
  const [array, setArray] = useState<number[]>(defaultArray);
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("quicksort");
  const [steps, setSteps] = useState<SortingStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate steps whenever array or algorithm changes
  useEffect(() => {
    const generatedSteps = generateAlgorithmSteps([...array], algorithm);
    setSteps(generatedSteps);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  }, [algorithm]);

  // Handle Play/Pause timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev < steps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 180);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, steps.length]);

  const currentStep: SortingStep = steps[currentStepIndex] || {
    array,
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: [],
    comparisons: 0,
    swaps: 0,
  };

  const handleRandomize = () => {
    const newArr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 85) + 12);
    setArray(newArr);
    const newSteps = generateAlgorithmSteps([...newArr], algorithm);
    setSteps(newSteps);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const handleReset = () => {
    setArray(defaultArray);
    const newSteps = generateAlgorithmSteps([...defaultArray], algorithm);
    setSteps(newSteps);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  return (
    <DemoShell
      title={locale === "ar" ? "مختبر الخوارزميات — التحليل البصري المباشر" : "MetaAlgorithm Lab — Visual Benchmark Runner"}
      categoryName={locale === "ar" ? "الحوسبة الخوارزمية والأداء" : "Algorithmic Computing"}
      projectSlug="metaalgorithm-lab"
      locale={locale}
      disclaimer={{
        en: "This is a real client-side algorithmic benchmark executing sorting routines in-browser and counting step-by-step memory and comparison operations.",
        ar: "هذا اختبار خوارزمي حقيقي يعمل مباشرة من جانب العميل داخل المتصفح لإحصاء المقارنات وعمليات التبديل خطوة بخطوة.",
      }}
      onReset={handleReset}
      statusText="BENCHMARK: READY"
      statusItems={[
        { label: "COMPARISONS", value: `${currentStep.comparisons}` },
        { label: "SWAPS", value: `${currentStep.swaps}` },
        { label: "STEP", value: `${currentStepIndex + 1}/${Math.max(steps.length, 1)}` },
      ]}
    >
      <div className="p-3 sm:p-5 flex flex-col gap-5 font-sans">
        {/* Controls Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-border">
          {/* Algorithm Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-text-dim hidden sm:inline">
              {locale === "ar" ? "الخوارزمية:" : "Algorithm:"}
            </span>
            <div className="flex items-center gap-1.5 bg-surface-secondary p-1 rounded-lg border border-border text-xs font-mono">
              <button
                onClick={() => setAlgorithm("quicksort")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  algorithm === "quicksort"
                    ? "bg-brand-gold text-surface-dark font-bold"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                QuickSort O(n log n)
              </button>
              <button
                onClick={() => setAlgorithm("bubblesort")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  algorithm === "bubblesort"
                    ? "bg-brand-gold text-surface-dark font-bold"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                BubbleSort O(n²)
              </button>
              <button
                onClick={() => setAlgorithm("insertionsort")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  algorithm === "insertionsort"
                    ? "bg-brand-gold text-surface-dark font-bold"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                InsertionSort O(n²)
              </button>
            </div>
          </div>

          {/* Execution Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1.5 bg-brand-gold text-surface-dark font-bold rounded flex items-center gap-1.5 text-xs font-mono hover:brightness-110 active:scale-95 transition-all shadow-sm"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>
                {isPlaying
                  ? locale === "ar"
                    ? "إيقاف مؤقت"
                    : "Pause"
                  : locale === "ar"
                  ? "تشغيل العرض"
                  : "Animate"}
              </span>
            </button>

            <button
              disabled={isPlaying || currentStepIndex >= steps.length - 1}
              onClick={handleNextStep}
              className="px-2.5 py-1.5 bg-surface border border-border text-text-primary font-mono text-xs rounded hover:border-brand-gold/50 disabled:opacity-40 transition-colors flex items-center gap-1"
            >
              <SkipForward className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{locale === "ar" ? "خطوة تالية" : "Step"}</span>
            </button>

            <button
              onClick={handleRandomize}
              className="px-2.5 py-1.5 bg-surface border border-border text-text-muted font-mono text-xs rounded hover:border-brand-gold/50 transition-colors"
            >
              {locale === "ar" ? "توليد مصفوفة جديدة" : "Randomize Array"}
            </button>
          </div>
        </div>

        {/* Visual Bar Chart Workspace */}
        <div className="p-4 bg-surface border border-border rounded-xl flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs font-mono text-text-dim">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-brand-gold" />
                <span>{locale === "ar" ? "قيمة عادية" : "Standard"}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-sky-400" />
                <span>{locale === "ar" ? "مقارنة نشطة" : "Comparing"}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />
                <span>{locale === "ar" ? "تبديل / ارتكاز" : "Swapping"}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                <span>{locale === "ar" ? "مرتبة حتمياً" : "Sorted"}</span>
              </span>
            </div>
            <span>
              {locale === "ar" ? "التقدم:" : "Progress:"}{" "}
              {Math.round(((currentStepIndex + 1) / Math.max(steps.length, 1)) * 100)}%
            </span>
          </div>

          {/* Bars Rendering */}
          <div className="h-64 sm:h-72 w-full flex items-end justify-center gap-1.5 sm:gap-2.5 pt-6 pb-2 px-2 border-b border-border/60 bg-surface-secondary/30 rounded-lg">
            {currentStep.array.map((val, idx) => {
              const isComparing = currentStep.comparingIndices.includes(idx);
              const isSwapping = currentStep.swappingIndices.includes(idx);
              const isSorted = currentStep.sortedIndices.includes(idx);

              let barColor = "bg-brand-gold/60 border-brand-gold/80";
              if (isSorted) barColor = "bg-emerald-500 border-emerald-400";
              else if (isSwapping) barColor = "bg-rose-500 border-rose-400 animate-pulse";
              else if (isComparing) barColor = "bg-sky-400 border-sky-300";

              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[10px] font-mono text-text-dim select-none font-bold">
                    {val}
                  </span>
                  <div
                    style={{ height: `${(val / 100) * 100}%` }}
                    className={`w-full max-w-[28px] rounded-t-sm border-t-2 transition-all duration-150 ${barColor}`}
                  />
                  <span className="text-[9px] font-mono text-text-dim/60 select-none">
                    [{idx}]
                  </span>
                </div>
              );
            })}
          </div>

          {/* Algorithmic Complexity Breakdown Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3 bg-surface-secondary/40 border border-border rounded-lg">
              <div className="text-[11px] text-text-dim mb-1">
                {locale === "ar" ? "التعقيد الزمني النظري" : "Asymptotic Time Complexity"}
              </div>
              <div className="text-sm font-bold text-brand-gold">
                {algorithm === "quicksort" ? "O(n log n) Best/Avg" : "O(n²) Polynomial"}
              </div>
            </div>

            <div className="p-3 bg-surface-secondary/40 border border-border rounded-lg">
              <div className="text-[11px] text-text-dim mb-1">
                {locale === "ar" ? "عمليات المقارنة الفعلية" : "Physical Comparisons"}
              </div>
              <div className="text-sm font-bold text-text-primary">
                {currentStep.comparisons} {locale === "ar" ? "مقارنة" : "Operations"}
              </div>
            </div>

            <div className="p-3 bg-surface-secondary/40 border border-border rounded-lg">
              <div className="text-[11px] text-text-dim mb-1">
                {locale === "ar" ? "عمليات تبديل الذاكرة" : "Memory Swaps Executed"}
              </div>
              <div className="text-sm font-bold text-text-primary">
                {currentStep.swaps} {locale === "ar" ? "تبديل" : "Swaps"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

// Algorithm Simulation Generator Helpers
function generateAlgorithmSteps(initArr: number[], algo: AlgorithmType): SortingStep[] {
  const steps: SortingStep[] = [];
  const arr = [...initArr];
  let compCount = 0;
  let swapCount = 0;

  steps.push({
    array: [...arr],
    comparingIndices: [],
    swappingIndices: [],
    sortedIndices: [],
    comparisons: 0,
    swaps: 0,
  });

  if (algo === "bubblesort") {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        compCount++;
        steps.push({
          array: [...arr],
          comparingIndices: [j, j + 1],
          swappingIndices: [],
          sortedIndices: Array.from({ length: i }, (_, k) => n - 1 - k),
          comparisons: compCount,
          swaps: swapCount,
        });

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapCount++;
          steps.push({
            array: [...arr],
            comparingIndices: [],
            swappingIndices: [j, j + 1],
            sortedIndices: Array.from({ length: i }, (_, k) => n - 1 - k),
            comparisons: compCount,
            swaps: swapCount,
          });
        }
      }
    }
    steps.push({
      array: [...arr],
      comparingIndices: [],
      swappingIndices: [],
      sortedIndices: arr.map((_, idx) => idx),
      comparisons: compCount,
      swaps: swapCount,
    });
  } else if (algo === "insertionsort") {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;

      while (j >= 0) {
        compCount++;
        steps.push({
          array: [...arr],
          comparingIndices: [j, j + 1],
          swappingIndices: [],
          sortedIndices: [],
          comparisons: compCount,
          swaps: swapCount,
        });

        if (arr[j] > key) {
          arr[j + 1] = arr[j];
          swapCount++;
          steps.push({
            array: [...arr],
            comparingIndices: [],
            swappingIndices: [j, j + 1],
            sortedIndices: [],
            comparisons: compCount,
            swaps: swapCount,
          });
          j--;
        } else {
          break;
        }
      }
      arr[j + 1] = key;
    }
    steps.push({
      array: [...arr],
      comparingIndices: [],
      swappingIndices: [],
      sortedIndices: arr.map((_, idx) => idx),
      comparisons: compCount,
      swaps: swapCount,
    });
  } else {
    // QuickSort
    const sortedSet = new Set<number>();
    function quicksortHelper(low: number, high: number) {
      if (low < high) {
        const pivotIndex = partition(low, high);
        sortedSet.add(pivotIndex);
        quicksortHelper(low, pivotIndex - 1);
        quicksortHelper(pivotIndex + 1, high);
      } else if (low === high) {
        sortedSet.add(low);
      }
    }

    function partition(low: number, high: number): number {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        compCount++;
        steps.push({
          array: [...arr],
          comparingIndices: [j, high],
          swappingIndices: [],
          sortedIndices: Array.from(sortedSet),
          comparisons: compCount,
          swaps: swapCount,
        });

        if (arr[j] < pivot) {
          i++;
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          swapCount++;
          steps.push({
            array: [...arr],
            comparingIndices: [],
            swappingIndices: [i, j],
            sortedIndices: Array.from(sortedSet),
            comparisons: compCount,
            swaps: swapCount,
          });
        }
      }

      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      swapCount++;
      steps.push({
        array: [...arr],
        comparingIndices: [],
        swappingIndices: [i + 1, high],
        sortedIndices: Array.from(sortedSet),
        comparisons: compCount,
        swaps: swapCount,
      });

      return i + 1;
    }

    quicksortHelper(0, arr.length - 1);
    steps.push({
      array: [...arr],
      comparingIndices: [],
      swappingIndices: [],
      sortedIndices: arr.map((_, idx) => idx),
      comparisons: compCount,
      swaps: swapCount,
    });
  }

  return steps;
}
