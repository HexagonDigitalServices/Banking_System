<div>
  <label className={s.label}>Transfer Fee</label>
  <div className={s.amountWrapper}>
    <span className="text-gray-400 font-medium absolute left-3 top-1/2 -translate-y-1/2">
      ₹
    </span>
    <input className={s.feeInput} readOnly value={fee} />
  </div>
  <p className={s.feeHint}>0.1% fee applies for transfers over ₹10,000</p>
</div>;
