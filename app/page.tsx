"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Github, Linkedin, Instagram, X, BookOpen } from "lucide-react"

import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [screenSize, setScreenSize] = useState("lg")
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState("right")
  const carouselRef = useRef<HTMLDivElement>(null)

  // サンプルプロジェクトデータ（美しいプレースホルダー画像を使用）
  const projects = [
    {
      title: "ヘアサロン Sakura Hair",
      description: "ポートフォリオ用のサンプルサイト。ヘアサロンの雰囲気をイメージしてUIをデザインしました。",
      imageUrl: "/sakura-hair.pages.dev_.png",
      link: "https://sakura-hair.pages.dev/"
    },
    {
      title: "何でも屋サービス",
      description: "架空の便利屋向けサンプルサイト。サービス内容や料金を想定して、わかりやすい画面構成をデザインしました。",
      imageUrl: "/handyman-service.pages.dev_.png",
      link: "https://handyman-service.pages.dev/"
    },
    {
      title: "タイ古式マッサージ アユタヤ",
      description: "ポートフォリオ用に制作したリラクゼーション系サンプルサイト。落ち着いた雰囲気を意識したデザインです。",
      imageUrl: "/thai-massage.pages.dev_.png",
      link: "https://thai-massage.pages.dev/"
    },
    {
      title: "ヘアサロン ABC Hair",
      description: "架空のヘアサロンサイトのサンプル。モダンで洗練されたデザインを意識して制作しました。",
      imageUrl: "/abc-hair.pages.dev_.png",
      link: "https://abc-hair.pages.dev/"
    },
    {
      title: "田中電気工事",
      description: "架空の電気工事会社向けサンプルサイト。信頼感をイメージしてデザインしたUIです。",
      imageUrl: "/tanaka-electric.pages.dev_.png",
      link: "https://tanaka-electric.pages.dev/"
    },
    {
      title: "Boulangerie Soleil",
      description: "ポートフォリオ用のパン屋サンプルサイト。大きなヒーロー画像とフォントで店舗の雰囲気を表現しました。",
      imageUrl: "/boulangerie-soleil.pages.dev_.png",
      link: "https://boulangerie-soleil.pages.dev/"
    },
    {
      title: "VBeauty Zen",
      description: "架空のプライベートエステ向けサンプルサイト。落ち着いた雰囲気を意識してデザインしています。",
      imageUrl: "/beauty-zen.pages.dev_.png",
      link: "https://beauty-zen.pages.dev/"
    },
    {
      title: "Harmony Yoga",
      description: "ポートフォリオ用に制作したヨガスタジオのサンプルサイト。心と体のバランスをイメージしたデザインです。",
      imageUrl: "/harmony-yoga.pages.dev_.png",
      link: "https://harmony-yoga.pages.dev/"
    }
  ]

  // 画面サイズに応じたプロジェクト数の設定
  const getProjectsPerPage = () => {
    switch (screenSize) {
      case "sm":
        return 2 // モバイル: 1列×2行
      case "md":
        return 4 // タブレット: 2列×2行
      case "lg":
        return 6 // PC: 3列×2行
      default:
        return 6
    }
  }

  // 現在の画面サイズに基づいたプロジェクト数
  const projectsPerPage = getProjectsPerPage()

  // 総ページ数
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const nextPage = () => {
    if (isAnimating) return

    setSlideDirection("right")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1))
      setIsAnimating(false)
    }, 300) // アニメーション時間と合わせる
  }

  const prevPage = () => {
    if (isAnimating) return

    setSlideDirection("left")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1))
      setIsAnimating(false)
    }, 300) // アニメーション時間と合わせる
  }

  const goToPage = (pageIndex: number) => {
    if (isAnimating) return

    setSlideDirection(pageIndex > currentPage ? "right" : "left")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentPage(pageIndex)
      setIsAnimating(false)
    }, 300) // アニメーション時間と合わせる
  }

  // 画面サイズの検出
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setScreenSize("sm")
      } else if (width < 768) {
        setScreenSize("md")
      } else {
        setScreenSize("lg")
      }
    }

    // 初期設定
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 画面サイズが変わったときにページをリセット
  useEffect(() => {
    setCurrentPage(0)
  }, [screenSize])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 現在のページのプロジェクトを取得
  const getCurrentPageProjects = () => {
    const startIndex = currentPage * projectsPerPage
    return projects.slice(startIndex, startIndex + projectsPerPage)
  }

  // スライドアニメーションのスタイルを取得
  const getSlideAnimationStyle = () => {
    if (!isAnimating) return {}

    return {
      transform: slideDirection === "right" ? "translateX(-10%)" : "translateX(10%)",
      opacity: 0,
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent border-transparent"
          }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className={`font-bold text-xl ${isScrolled ? "text-foreground" : "text-white drop-shadow-lg"}`}>
            H2works
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section with beautiful hero image */}
        <section className="relative h-screen w-full">
          <div className="absolute inset-0">
            <img
              src="/image_fx_.jpg"
              alt="ヒーロー画像"
              className="h-full w-full object-cover object-[40%_50%] sm:object-[50%_50%]"
            />
            <div className="absolute inset-0 bg-black/8"></div>
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-white">
            <h1 className="font-roboto text-4xl md:text-6xl font-bold tracking-tighter text-black drop-shadow-lg">
              H<span className="text-primary">2</span>works
            </h1>

            <p className="text-xl mt-4 md:w-2/3 text-black">
              AIを活用したWebサイト制作で、デザインと機能を最適化。<br />
              ビジネスやサービスの魅力を直感的に伝えるWeb体験を提供します。
            </p>

          </div>
        </section>

        {/* Projects Section - 2-row Grid Carousel with Animation */}
        <section id="projects" className="py-16">
          <div className="container space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">事例紹介</h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">
                クライアントのビジネスやサービスの価値を最大化するために手がけた、
                Webサイト制作事例をご覧ください。
              </p>
            </div>

            <div className="relative" ref={carouselRef}>
              <div className="overflow-hidden">
                <div
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    ...getSlideAnimationStyle(),
                  }}
                >
                  <div
                    className={`grid gap-4 grid-rows-2 ${screenSize === "sm" ? "grid-cols-1" : screenSize === "md" ? "grid-cols-2" : "grid-cols-3"
                      }`}
                  >
                    {getCurrentPageProjects().map((project, index) => (
                      <ProjectCard
                        key={currentPage * projectsPerPage + index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        link={project.link}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {totalPages > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
                    onClick={prevPage}
                    disabled={isAnimating}
                  >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">前のページ</span>
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
                    onClick={nextPage}
                    disabled={isAnimating}
                  >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">次のページ</span>
                  </Button>
                </>
              )}

              {totalPages > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full transition-colors ${currentPage === index ? "bg-primary" : "bg-muted"
                        }`}
                      onClick={() => goToPage(index)}
                      disabled={isAnimating}
                      aria-label={`ページ ${index + 1} に移動`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} H2works. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/H2works/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.instagram.com/h2works_xyz/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://x.com/h2works_xyz" className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="h-5 w-5" />
              <span className="sr-only">X</span>
            </Link>
            <Link href="https://zenn.dev/ky2rz4" className="text-muted-foreground hover:text-foreground transition-colors">
              <BookOpen className="h-5 w-5" />
              <span className="sr-only">Zenn</span>
            </Link>
            <Link href="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

