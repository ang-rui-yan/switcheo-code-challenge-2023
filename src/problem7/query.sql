-- Create a temporary view of the currency conversion as currency_conversion
-- Join trades and balances based on address
-- In the balances, get the multiplication (aggregate) of amount and currency from currency_conversion based on the matched denom
-- Get these where the trades' block_height and balances's amount requirements are met

WITH currency_conversion AS (
    SELECT 'usdc' as denom, 0.000001 as currency UNION
    SELECT 'swth', 0.00000005 UNION
    SELECT 'tmz', 0.003
)
SELECT t.address, t.denom as trade_denom, t.amount as trade, b.denom as wallet_denom, b.usd_balance as wallet
FROM trades t
JOIN (
    SELECT address, sum(amount * cc.currency) as usd_balance, cc.denom
    FROM balances b
    JOIN currency_conversion cc ON b.denom = cc.denom
    GROUP BY address, cc.denom
) b ON b.address = t.address
WHERE t.block_height > 730000 AND b.usd_balance >= 500;