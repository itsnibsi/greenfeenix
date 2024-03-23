import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="prose max-w-none">
      <p>
        We help businesses and other agents to develop their sustainability and
        responsibility, which are a must in today&apos;s world. With help of GF,
        all clients can meet the demands of global action program{" "}
        <a
          href="https://sdgs.un.org/2030agenda"
          target="_blank"
          title="Transforming our world: the 2030 Agenda for Sustainable Development"
        >
          Agenda2030{" "}
          <ArrowTopRightOnSquareIcon className="mb-3 inline h-4 w-4" />
        </a>
        .
      </p>

      <p>
        GF works closely with clients to help them measure and then improve
        their sustainability performance. With customer demand tailored plans
        all the customers can make the difference that the next generations and
        the world needs. This could for example involve looking at the materials
        used and the waste produced, management of energy, water, food etc.
      </p>

      <p>
        General aims of GF consultancy and works are to preserve and conserve
        natural resources and natural environments by implementing and/or
        enhancing:
      </p>

      <ul>
        <li>Waste reduction</li>
        <li>Greenhouse gas reduction</li>
        <li>Reusing and recycling resources</li>
        <li>Reduction of water and electricity consumption</li>
        <li>Increasing of clean energy production</li>
        <li>
          All possible proactive measures for fighting against ecological
          challenges
        </li>
        <li>Green economy</li>
      </ul>

      <p>Benefits to customers include:</p>

      <ul>
        <li>
          A competitive advance from a sustainable agency label/eco-friendly
          brand
        </li>
        <li>Customer satisfaction</li>
        <li>
          Financial savings from reduced electricity and water consumption
        </li>
        <li>Sustainable waste management/savings from lower waste masses</li>
        <li>Reduction of surplus food/savings from reductions</li>
        <li>
          Possibilities for businesses to apply for fundings, grants and cheaper
          loans for modernizing real estate engineering/technology to a more
          sustainable level
        </li>
      </ul>
    </main>
  );
}
