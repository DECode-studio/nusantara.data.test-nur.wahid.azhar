export const transactionStatus = (
    status: string
): string => {
    const successStatus = [
        "MINTED",
        "SUCCESS",
        "APPROVED",
        "PAID"
    ];

    const destructiveStatus = [
        "FAILED",
        "REJECTED",
        "INVALID",
    ];

    const verifyStatus = [
        "REQUESTED",
        "ACTION_REQUIRED",
        "PROCESSING",
        "IN_PROCESS",
        "IN_PROCESS_APPROVE",
        "IN_PROCESS_SWAP",
        "PENDING_BURN",
        "PENDING_REDEEM",
    ];

    const defaultStatus = [
        "NOT_AVAILABLE",
        "REFUND",
        "EXPIRED",
    ];

    if (successStatus.includes(status)) return "success";
    if (destructiveStatus.includes(status)) return "destructive";
    if (verifyStatus.includes(status)) return "verify";

    return "default";
};
