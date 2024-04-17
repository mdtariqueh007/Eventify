import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({searchParams}: SearchParamProps) {

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 bg-[url('/assets/images/rebeca.jpg')">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Empowering Every Event, Every Moment!</h1>
            <p className="p-regular-20 md:p-regular-24">Where every detail meets destiny, crafting unforgettable experiences, one event at a time."</p>
            <Button size="lg" asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 button w-full sm:w-fit">
              <Link href = "#events">
                Eplore Now
              </Link>
            </Button>
          </div>
          <Image 
            src = "/assets/images/homeImg.jpg"
            alt = "hero"
            width={1000}
            height={1000}
            className="rounded-0 max-h-[70vh] object-contain object-center 2xl:max-h-[70vh] "
          />
        </div>
      </section>
      
      <section id = "events" className="wrapper my-8 flex flex-col gpa-8 md:gap-12">
        <h2 className="h2-bold"> The Trusted Choice for <br />Countless Events, Every Time.</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">

          <Search />
          <CategoryFilter/>

        </div>

        <Collection 
          data={events?.data}
          emptyTitle = "No Events Found"
          emptyStateSubtext = "Come Back Later"
          collectionType = "All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
