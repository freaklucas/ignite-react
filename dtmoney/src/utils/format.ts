export function currencyBRL(value: number) {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function dateTimeBR(date: string) {
    return new Intl.DateTimeFormat("pt-br").format(new Date(date))
}
