import { getCapabilitySummary } from "@/lib/capabilitySummary";

export function CapabilitySummary() {
  const groups = getCapabilitySummary();
  return (
    <section className="capability-summary">
      <h2>Năng lực</h2>
      <div className="scroll-x">
        <table className="meta-table">
          <tbody>
            {groups.map((group) => (
              <tr key={group.key}>
                <th>{group.label}</th>
                <td>
                  <ul className="capability-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

