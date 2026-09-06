import PackageGrid from "./PackageGrid"
import SectionHeading from "../shared/SectionHeading"

export default function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRAVEL PACKAGES"
          title="Best Packages For You"
        />

        <PackageGrid />
      </div>
    </section>
  )
}
