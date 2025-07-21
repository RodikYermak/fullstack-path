# ☕️ Loyalty Points Engine Challenge
#
# RULES:
# • Each whole dollar spent earns 3 points
# • Tiers:
#     < 100 pts   →  Bronze
#     100-499 pts → Silver
#     ≥ 500 pts   →  Gold
#
# STEPS:
# 1. Define earn_points(price) → returns points for one purchase
# 2. Define tier_label(points) → returns "Bronze" / "Silver" / "Gold"
# 3. Given the hard-coded list `purchases`,
#    loop through it, call earn_points() for each amount,
#    and add the result to total_points.
# 4. After the loop, call tier_label(total_points)
# 5. Print 'Loyalty Summary':
#       • Total dollars spent
#       • Total points earned
#       • Final tier

# Purchase history (e.g., 3.75, 7.20, etc.)
POINTS_PER_DOLLAR = 3
TIER_THRESHOLD = {
    'Bronze': (0, 99),
    'Silver': (100, 499),
    'Gold': (500, float('inf')),
}

def earn_points(price: float) -> int:
    """Earn points based on whole dollars spent."""
    if price < 0:
        raise ValueError("Purchase amount cannot be negative")
    return int(price) * POINTS_PER_DOLLAR

def tier_label(points: int) -> str:
    """Determines loyalty tier from points."""
    for tier, (low, high) in TIER_THRESHOLD.items():
        if low <= points <=high:
            return tier
    raise ValueError("Invalid point value")

def get_loyalty_summary(purchases: list[float]) -> dict[str, float | int | str]:
    """Calculates total spending, points, and tier."""
    total_spent = sum(purchases)
    total_points = sum(earn_points(p) for p in purchases)
    tier = tier_label(total_points)
    return {
        "total_spent": total_spent,
        "total_points": total_points,
        "tier": tier
    }

def print_loyalty_summary(summary: dict) -> None:
    """Prints the loyalty summary in a formatted way."""
    print("Loyalty Summary")
    print(f"{'Total dollars spent:':20} {summary['total_spent']:.2f}")
    print(f"{'Total points earned:' :20} {summary['total_points']}")
    print(f"{'Final tier:':20} {summary['tier']}")

def run_tests():
    # earn_points() tests
    assert earn_points(0.99) == 0
    assert earn_points(1.00) == 3
    assert earn_points(3.75) == 9

    # tier_label() tests
    assert tier_label(0) == 'Bronze'
    assert tier_label(99) == 'Bronze'
    assert tier_label(100) == 'Silver'
    assert tier_label(500) == 'Gold'

    # negative input test
    try:
        earn_points(-5)
        assert False, "Negative value should raise ValueError"
    except ValueError:
        pass

    # integration test
    purchases = [3.75, 7.20, 15.90, 1000.99, 3.55]
    expected_spent = sum(purchases)
    expected_points = sum(earn_points(p) for p in purchases)
    expected_tier = tier_label(expected_points)

    assert expected_points == 3084
    assert expected_tier == 'Gold'
    assert round(expected_spent, 2) == 1031.39

    print("✅ All tests passed!")

run_tests()

if __name__ == "__main__":
    purchases = [3.75, 7.20, 15.90, 1000.99, 3.55]
    summary = get_loyalty_summary(purchases)
    print_loyalty_summary(summary)