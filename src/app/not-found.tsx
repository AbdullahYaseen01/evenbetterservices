import { ButtonLink, Container } from "@/components/brand";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-sm font-semibold tracking-[0.16em] text-emerald uppercase">404</p>
      <h1 className="display mt-4 text-5xl text-forest sm:text-7xl">This page is not on the map.</h1>
      <p className="mt-4 max-w-lg text-lg text-ink/75">The link may be out of date. The services and the enquiry form are still here.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          Explore services
        </ButtonLink>
      </div>
    </Container>
  );
}
