import Image from "next/image";

const images = {
  reception: {
    src: "/hotel-images/reception-checkin.jpg",
    alt: "Moderne Hotelrezeption mit Check-in-Situation und Gästen"
  },
  lobby: {
    src: "/hotel-images/lobby-guests.jpg",
    alt: "Hotelgäste in einer hellen Lobby mit persönlichem Service"
  },
  room: {
    src: "/hotel-images/boutique-room.jpg",
    alt: "Modernes Boutique-Hotelzimmer mit gepflegter Ausstattung"
  },
  spa: {
    src: "/hotel-images/spa-wellness.jpg",
    alt: "Wellness- und Spa-Bereich eines Hotels mit vorbereiteten Handtüchern"
  },
  services: {
    src: "/hero-images/leistungen-hotelprozesse.jpg",
    alt: "Hotelteam bespricht digitale Hotelprozesse mit PMSLogic auf Laptop und Tablet"
  },
  functions: {
    src: "/hero-images/funktionen-tablet-hotelsoftware.jpg",
    alt: "Hotelmitarbeiterin nutzt PMSLogic Funktionen auf einem Tablet an der Rezeption"
  }
};

export function HeroHotelImage() {
  return (
    <figure className="hotel-hero-image">
      <Image
        src={images.reception.src}
        alt={images.reception.alt}
        width={1600}
        height={914}
        priority
        sizes="(max-width: 1080px) 100vw, 54vw"
      />
      <figcaption>
        <span>Hotelprozesse klar verbunden</span>
        <strong>Frontdesk · Gäste · Zimmer · Team</strong>
      </figcaption>
    </figure>
  );
}

export function HotelImageGrid() {
  const gridImages = [images.lobby, images.room, images.spa];

  return (
    <figure className="hotel-image-grid">
      {gridImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={1600}
          height={914}
          priority={index === 0}
          sizes="(max-width: 820px) 100vw, (max-width: 1080px) 50vw, 24vw"
        />
      ))}
      <figcaption className="sr-only">
        Hotelbilder mit Lobby, Zimmer und Wellnessbereich als Beispiele für
        unterschiedliche Unterkunftsbereiche.
      </figcaption>
    </figure>
  );
}

export function SpaHotelImage() {
  return (
    <figure className="hotel-hero-image">
      <Image
        src={images.spa.src}
        alt={images.spa.alt}
        width={1600}
        height={914}
        sizes="(max-width: 1080px) 100vw, 44vw"
      />
      <figcaption>
        <span>PMSSPA & Zusatzbereiche</span>
        <strong>Wellness · Termine · Leistungen</strong>
      </figcaption>
    </figure>
  );
}

export function TabletSoftwareImage() {
  return (
    <figure className="tablet-software-image">
      <Image
        src="/software-images/tablet-pmslogic.jpg"
        alt="Hotelmanager nutzt PMSLogic Hotelsoftware auf einem Tablet an der Rezeption"
        width={1200}
        height={1470}
        sizes="(max-width: 1080px) 100vw, 34vw"
      />
      <figcaption>
        <span>PMSLogic mobil</span>
        <strong>Reservierungen, Zimmerstatus und Aufgaben auf dem Tablet</strong>
      </figcaption>
    </figure>
  );
}

export function ServicesHeroImage() {
  return (
    <figure className="hotel-hero-image">
      <Image
        src={images.services.src}
        alt={images.services.alt}
        width={1600}
        height={1000}
        priority
        sizes="(max-width: 1080px) 100vw, 42vw"
      />
      <figcaption>
        <span>PMSLogic Leistungen</span>
        <strong>Prozesse, Team und digitale Hotelverwaltung</strong>
      </figcaption>
    </figure>
  );
}

export function FunctionsHeroImage() {
  return (
    <figure className="hotel-hero-image">
      <Image
        src={images.functions.src}
        alt={images.functions.alt}
        width={1600}
        height={1000}
        priority
        sizes="(max-width: 1080px) 100vw, 42vw"
      />
      <figcaption>
        <span>PMSLogic Funktionen</span>
        <strong>Reservierungen, Zimmerstatus und Aufgaben mobil im Blick</strong>
      </figcaption>
    </figure>
  );
}
