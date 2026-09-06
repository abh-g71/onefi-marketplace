import { Check } from "lucide-react";

function EmiPlanCard({ plan, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`emi-plan-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="emi-plan-main">
        <div className="emi-radio">
          {selected && <span />}
        </div>

        <div>
          <strong>{plan.months} months</strong>
          <span>
            {plan.interestRate === 0
              ? "No-cost EMI"
              : `${plan.interestRate}% interest`}
          </span>
        </div>
      </div>

      <div className="emi-plan-price">
        <strong>
          {"\u20B9"}{plan.monthlyAmount.toLocaleString("en-IN")}/mo
        </strong>

        {plan.interestRate === 0 && (
          <span className="emi-zero">
            <Check size={12} />
            0% interest
          </span>
        )}
      </div>
    </button>
  );
}

export default EmiPlanCard;
