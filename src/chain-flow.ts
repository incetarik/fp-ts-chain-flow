import type {
  HKT,
  Kind,
  Kind2,
  Kind3,
  Kind4,
  URIS,
  URIS2,
  URIS3,
  URIS4,
} from 'fp-ts/HKT'

import type {
  Chain,
  Chain1,
  Chain2,
  Chain2C,
  Chain3,
  Chain3C,
  Chain4,
} from 'fp-ts/lib/Chain'

export type ChainFlow<M> = {
  <A extends ReadonlyArray<unknown>, B>(ab: (...a: A) => HKT<M, B>): (...a: A) => HKT<M, B>,
  <A extends ReadonlyArray<unknown>, B, C>(ab: (...a: A) => HKT<M, B>, bc: (b: B) => HKT<M, C>): (...a: A) => HKT<M, C>,
  <A extends ReadonlyArray<unknown>, B, C, D>(
    ab: (...a: A) => HKT<M, B>,
    bc: (b: B) => HKT<M, C>,
    cd: (c: C) => HKT<M, D>,
  ): (...a: A) => HKT<M, D>,
  <A extends ReadonlyArray<unknown>, B, C, D, E>(
    ab: (...a: A) => HKT<M, B>,
    bc: (b: B) => HKT<M, C>,
    cd: (c: C) => HKT<M, D>,
    de: (d: D) => HKT<M, E>,
  ): (...a: A) => HKT<M, E>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F>(
    ab: (...a: A) => HKT<M, B>,
    bc: (b: B) => HKT<M, C>,
    cd: (c: C) => HKT<M, D>,
    de: (d: D) => HKT<M, E>,
    ef: (e: E) => HKT<M, F>,
  ): (...a: A) => HKT<M, F>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
    ab: (...a: A) => HKT<M, B>,
    bc: (b: B) => HKT<M, C>,
    cd: (c: C) => HKT<M, D>,
    de: (d: D) => HKT<M, E>,
    ef: (e: E) => HKT<M, F>,
    fg: (f: F) => HKT<M, G>,
  ): (...a: A) => HKT<M, G>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
    ab: (...a: A) => HKT<M, B>,
    bc: (b: B) => HKT<M, C>,
    cd: (c: C) => HKT<M, D>,
    de: (d: D) => HKT<M, E>,
    ef: (e: E) => HKT<M, F>,
    fg: (f: F) => HKT<M, G>,
    gh: (g: G) => HKT<M, H>,
  ): (...a: A) => HKT<M, H>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
    ab: (...a: A) => HKT<M, B>,
    bc: (b: B) => HKT<M, C>,
    cd: (c: C) => HKT<M, D>,
    de: (d: D) => HKT<M, E>,
    ef: (e: E) => HKT<M, F>,
    fg: (f: F) => HKT<M, G>,
    gh: (g: G) => HKT<M, H>,
    hi: (h: H) => HKT<M, I>,
  ): (...a: A) => HKT<M, I>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
    ab: (...a: A) => HKT<M, B>,
    bc: (b: B) => HKT<M, C>,
    cd: (c: C) => HKT<M, D>,
    de: (d: D) => HKT<M, E>,
    ef: (e: E) => HKT<M, F>,
    fg: (f: F) => HKT<M, G>,
    gh: (g: G) => HKT<M, H>,
    hi: (h: H) => HKT<M, I>,
    ij: (i: I) => HKT<M, J>,
  ): (...a: A) => HKT<M, J>,
}

export type ChainFlow1<M extends URIS> = {
  <A extends ReadonlyArray<unknown>, B>(ab: (...a: A) => Kind<M, B>): (...a: A) => Kind<M, B>,
  <A extends ReadonlyArray<unknown>, B, C>(ab: (...a: A) => Kind<M, B>, bc: (b: B) => Kind<M, C>): (...a: A) => Kind<M, C>,
  <A extends ReadonlyArray<unknown>, B, C, D>(
    ab: (...a: A) => Kind<M, B>,
    bc: (b: B) => Kind<M, C>,
    cd: (c: C) => Kind<M, D>,
  ): (...a: A) => Kind<M, D>,
  <A extends ReadonlyArray<unknown>, B, C, D, E>(
    ab: (...a: A) => Kind<M, B>,
    bc: (b: B) => Kind<M, C>,
    cd: (c: C) => Kind<M, D>,
    de: (d: D) => Kind<M, E>,
  ): (...a: A) => Kind<M, E>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F>(
    ab: (...a: A) => Kind<M, B>,
    bc: (b: B) => Kind<M, C>,
    cd: (c: C) => Kind<M, D>,
    de: (d: D) => Kind<M, E>,
    ef: (e: E) => Kind<M, F>,
  ): (...a: A) => Kind<M, F>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
    ab: (...a: A) => Kind<M, B>,
    bc: (b: B) => Kind<M, C>,
    cd: (c: C) => Kind<M, D>,
    de: (d: D) => Kind<M, E>,
    ef: (e: E) => Kind<M, F>,
    fg: (f: F) => Kind<M, G>,
  ): (...a: A) => Kind<M, G>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
    ab: (...a: A) => Kind<M, B>,
    bc: (b: B) => Kind<M, C>,
    cd: (c: C) => Kind<M, D>,
    de: (d: D) => Kind<M, E>,
    ef: (e: E) => Kind<M, F>,
    fg: (f: F) => Kind<M, G>,
    gh: (g: G) => Kind<M, H>,
  ): (...a: A) => Kind<M, H>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
    ab: (...a: A) => Kind<M, B>,
    bc: (b: B) => Kind<M, C>,
    cd: (c: C) => Kind<M, D>,
    de: (d: D) => Kind<M, E>,
    ef: (e: E) => Kind<M, F>,
    fg: (f: F) => Kind<M, G>,
    gh: (g: G) => Kind<M, H>,
    hi: (h: H) => Kind<M, I>,
  ): (...a: A) => Kind<M, I>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
    ab: (...a: A) => Kind<M, B>,
    bc: (b: B) => Kind<M, C>,
    cd: (c: C) => Kind<M, D>,
    de: (d: D) => Kind<M, E>,
    ef: (e: E) => Kind<M, F>,
    fg: (f: F) => Kind<M, G>,
    gh: (g: G) => Kind<M, H>,
    hi: (h: H) => Kind<M, I>,
    ij: (i: I) => Kind<M, J>,
  ): (...a: A) => Kind<M, J>,
}

export type ChainFlow2<M extends URIS2> = {
  <A extends ReadonlyArray<unknown>, XE, B>(ab: (...a: A) => Kind2<M, XE, B>): (...a: A) => Kind2<M, XE, B>,
  <A extends ReadonlyArray<unknown>, XE, B, C>(ab: (...a: A) => Kind2<M, XE, B>, bc: (b: B) => Kind2<M, XE, C>): (...a: A) => Kind2<M, XE, C>,
  <A extends ReadonlyArray<unknown>, XE, B, C, D>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
  ): (...a: A) => Kind2<M, XE, D>,
  <A extends ReadonlyArray<unknown>, XE, B, C, D, E>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
  ): (...a: A) => Kind2<M, XE, E>,
  <A extends ReadonlyArray<unknown>, XE, B, C, D, E, F>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
  ): (...a: A) => Kind2<M, XE, F>,
  <A extends ReadonlyArray<unknown>, XE, B, C, D, E, F, G>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
    fg: (f: F) => Kind2<M, XE, G>,
  ): (...a: A) => Kind2<M, XE, G>,
  <A extends ReadonlyArray<unknown>, XE, B, C, D, E, F, G, H>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
    fg: (f: F) => Kind2<M, XE, G>,
    gh: (g: G) => Kind2<M, XE, H>,
  ): (...a: A) => Kind2<M, XE, H>,
  <A extends ReadonlyArray<unknown>, XE, B, C, D, E, F, G, H, I>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
    fg: (f: F) => Kind2<M, XE, G>,
    gh: (g: G) => Kind2<M, XE, H>,
    hi: (h: H) => Kind2<M, XE, I>,
  ): (...a: A) => Kind2<M, XE, I>,
  <A extends ReadonlyArray<unknown>, XE, B, C, D, E, F, G, H, I, J>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
    fg: (f: F) => Kind2<M, XE, G>,
    gh: (g: G) => Kind2<M, XE, H>,
    hi: (h: H) => Kind2<M, XE, I>,
    ij: (i: I) => Kind2<M, XE, J>,
  ): (...a: A) => Kind2<M, XE, J>,
}

export type ChainFlow2C<M extends URIS2, XE> = {
  <A extends ReadonlyArray<unknown>, B>(ab: (...a: A) => Kind2<M, XE, B>): (...a: A) => Kind2<M, XE, B>,
  <A extends ReadonlyArray<unknown>, B, C>(ab: (...a: A) => Kind2<M, XE, B>, bc: (b: B) => Kind2<M, XE, C>): (...a: A) => Kind2<M, XE, C>,
  <A extends ReadonlyArray<unknown>, B, C, D>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
  ): (...a: A) => Kind2<M, XE, D>,
  <A extends ReadonlyArray<unknown>, B, C, D, E>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
  ): (...a: A) => Kind2<M, XE, E>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
  ): (...a: A) => Kind2<M, XE, F>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
    fg: (f: F) => Kind2<M, XE, G>,
  ): (...a: A) => Kind2<M, XE, G>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
    fg: (f: F) => Kind2<M, XE, G>,
    gh: (g: G) => Kind2<M, XE, H>,
  ): (...a: A) => Kind2<M, XE, H>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
    fg: (f: F) => Kind2<M, XE, G>,
    gh: (g: G) => Kind2<M, XE, H>,
    hi: (h: H) => Kind2<M, XE, I>,
  ): (...a: A) => Kind2<M, XE, I>,
  <A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
    ab: (...a: A) => Kind2<M, XE, B>,
    bc: (b: B) => Kind2<M, XE, C>,
    cd: (c: C) => Kind2<M, XE, D>,
    de: (d: D) => Kind2<M, XE, E>,
    ef: (e: E) => Kind2<M, XE, F>,
    fg: (f: F) => Kind2<M, XE, G>,
    gh: (g: G) => Kind2<M, XE, H>,
    hi: (h: H) => Kind2<M, XE, I>,
    ij: (i: I) => Kind2<M, XE, J>,
  ): (...a: A) => Kind2<M, XE, J>,
}

export type ChainFlow3<M extends URIS3> = {
  <A extends ReadonlyArray<unknown>, XR, XE, B>(ab: (...a: A) => Kind3<M, XR, XE, B>): (...a: A) => Kind3<M, XR, XE, B>,
  <A extends ReadonlyArray<unknown>, XR, XE, B, C>(ab: (...a: A) => Kind3<M, XR, XE, B>, bc: (b: B) => Kind3<M, XR, XE, C>): (...a: A) => Kind3<M, XR, XE, C>,
  <A extends ReadonlyArray<unknown>, XR, XE, B, C, D>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
  ): (...a: A) => Kind3<M, XR, XE, D>,
  <A extends ReadonlyArray<unknown>, XR, XE, B, C, D, E>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
  ): (...a: A) => Kind3<M, XR, XE, E>,
  <A extends ReadonlyArray<unknown>, XR, XE, B, C, D, E, F>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
  ): (...a: A) => Kind3<M, XR, XE, F>,
  <A extends ReadonlyArray<unknown>, XR, XE, B, C, D, E, F, G>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
    fg: (f: F) => Kind3<M, XR, XE, G>,
  ): (...a: A) => Kind3<M, XR, XE, G>,
  <A extends ReadonlyArray<unknown>, XR, XE, B, C, D, E, F, G, H>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
    fg: (f: F) => Kind3<M, XR, XE, G>,
    gh: (g: G) => Kind3<M, XR, XE, H>,
  ): (...a: A) => Kind3<M, XR, XE, H>,
  <A extends ReadonlyArray<unknown>, XR, XE, B, C, D, E, F, G, H, I>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
    fg: (f: F) => Kind3<M, XR, XE, G>,
    gh: (g: G) => Kind3<M, XR, XE, H>,
    hi: (h: H) => Kind3<M, XR, XE, I>,
  ): (...a: A) => Kind3<M, XR, XE, I>,
  <A extends ReadonlyArray<unknown>, XR, XE, B, C, D, E, F, G, H, I, J>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
    fg: (f: F) => Kind3<M, XR, XE, G>,
    gh: (g: G) => Kind3<M, XR, XE, H>,
    hi: (h: H) => Kind3<M, XR, XE, I>,
    ij: (i: I) => Kind3<M, XR, XE, J>,
  ): (...a: A) => Kind3<M, XR, XE, J>,
}

export type ChainFlow3C<M extends URIS3, XE> = {
  <A extends ReadonlyArray<unknown>, XR, B>(ab: (...a: A) => Kind3<M, XR, XE, B>): (...a: A) => Kind3<M, XR, XE, B>,
  <A extends ReadonlyArray<unknown>, XR, B, C>(ab: (...a: A) => Kind3<M, XR, XE, B>, bc: (b: B) => Kind3<M, XR, XE, C>): (...a: A) => Kind3<M, XR, XE, C>,
  <A extends ReadonlyArray<unknown>, XR, B, C, D>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
  ): (...a: A) => Kind3<M, XR, XE, D>,
  <A extends ReadonlyArray<unknown>, XR, B, C, D, E>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
  ): (...a: A) => Kind3<M, XR, XE, E>,
  <A extends ReadonlyArray<unknown>, XR, B, C, D, E, F>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
  ): (...a: A) => Kind3<M, XR, XE, F>,
  <A extends ReadonlyArray<unknown>, XR, B, C, D, E, F, G>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
    fg: (f: F) => Kind3<M, XR, XE, G>,
  ): (...a: A) => Kind3<M, XR, XE, G>,
  <A extends ReadonlyArray<unknown>, XR, B, C, D, E, F, G, H>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
    fg: (f: F) => Kind3<M, XR, XE, G>,
    gh: (g: G) => Kind3<M, XR, XE, H>,
  ): (...a: A) => Kind3<M, XR, XE, H>,
  <A extends ReadonlyArray<unknown>, XR, B, C, D, E, F, G, H, I>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
    fg: (f: F) => Kind3<M, XR, XE, G>,
    gh: (g: G) => Kind3<M, XR, XE, H>,
    hi: (h: H) => Kind3<M, XR, XE, I>,
  ): (...a: A) => Kind3<M, XR, XE, I>,
  <A extends ReadonlyArray<unknown>, XR, B, C, D, E, F, G, H, I, J>(
    ab: (...a: A) => Kind3<M, XR, XE, B>,
    bc: (b: B) => Kind3<M, XR, XE, C>,
    cd: (c: C) => Kind3<M, XR, XE, D>,
    de: (d: D) => Kind3<M, XR, XE, E>,
    ef: (e: E) => Kind3<M, XR, XE, F>,
    fg: (f: F) => Kind3<M, XR, XE, G>,
    gh: (g: G) => Kind3<M, XR, XE, H>,
    hi: (h: H) => Kind3<M, XR, XE, I>,
    ij: (i: I) => Kind3<M, XR, XE, J>,
  ): (...a: A) => Kind3<M, XR, XE, J>,
}

export type ChainFlow4<M extends URIS4> = {
  <A extends ReadonlyArray<unknown>, XS, XR, XE, B>(ab: (...a: A) => Kind4<M, XS, XR, XE, B>): (...a: A) => Kind4<M, XS, XR, XE, B>,
  <A extends ReadonlyArray<unknown>, XS, XR, XE, B, C>(ab: (...a: A) => Kind4<M, XS, XR, XE, B>, bc: (b: B) => Kind4<M, XS, XR, XE, C>): (...a: A) => Kind4<M, XS, XR, XE, C>,
  <A extends ReadonlyArray<unknown>, XS, XR, XE, B, C, D>(
    ab: (...a: A) => Kind4<M, XS, XR, XE, B>,
    bc: (b: B) => Kind4<M, XS, XR, XE, C>,
    cd: (c: C) => Kind4<M, XS, XR, XE, D>,
  ): (...a: A) => Kind4<M, XS, XR, XE, D>,
  <A extends ReadonlyArray<unknown>, XS, XR, XE, B, C, D, E>(
    ab: (...a: A) => Kind4<M, XS, XR, XE, B>,
    bc: (b: B) => Kind4<M, XS, XR, XE, C>,
    cd: (c: C) => Kind4<M, XS, XR, XE, D>,
    de: (d: D) => Kind4<M, XS, XR, XE, E>,
  ): (...a: A) => Kind4<M, XS, XR, XE, E>,
  <A extends ReadonlyArray<unknown>, XS, XR, XE, B, C, D, E, F>(
    ab: (...a: A) => Kind4<M, XS, XR, XE, B>,
    bc: (b: B) => Kind4<M, XS, XR, XE, C>,
    cd: (c: C) => Kind4<M, XS, XR, XE, D>,
    de: (d: D) => Kind4<M, XS, XR, XE, E>,
    ef: (e: E) => Kind4<M, XS, XR, XE, F>,
  ): (...a: A) => Kind4<M, XS, XR, XE, F>,
  <A extends ReadonlyArray<unknown>, XS, XR, XE, B, C, D, E, F, G>(
    ab: (...a: A) => Kind4<M, XS, XR, XE, B>,
    bc: (b: B) => Kind4<M, XS, XR, XE, C>,
    cd: (c: C) => Kind4<M, XS, XR, XE, D>,
    de: (d: D) => Kind4<M, XS, XR, XE, E>,
    ef: (e: E) => Kind4<M, XS, XR, XE, F>,
    fg: (f: F) => Kind4<M, XS, XR, XE, G>,
  ): (...a: A) => Kind4<M, XS, XR, XE, G>,
  <A extends ReadonlyArray<unknown>, XS, XR, XE, B, C, D, E, F, G, H>(
    ab: (...a: A) => Kind4<M, XS, XR, XE, B>,
    bc: (b: B) => Kind4<M, XS, XR, XE, C>,
    cd: (c: C) => Kind4<M, XS, XR, XE, D>,
    de: (d: D) => Kind4<M, XS, XR, XE, E>,
    ef: (e: E) => Kind4<M, XS, XR, XE, F>,
    fg: (f: F) => Kind4<M, XS, XR, XE, G>,
    gh: (g: G) => Kind4<M, XS, XR, XE, H>,
  ): (...a: A) => Kind4<M, XS, XR, XE, H>,
  <A extends ReadonlyArray<unknown>, XS, XR, XE, B, C, D, E, F, G, H, I>(
    ab: (...a: A) => Kind4<M, XS, XR, XE, B>,
    bc: (b: B) => Kind4<M, XS, XR, XE, C>,
    cd: (c: C) => Kind4<M, XS, XR, XE, D>,
    de: (d: D) => Kind4<M, XS, XR, XE, E>,
    ef: (e: E) => Kind4<M, XS, XR, XE, F>,
    fg: (f: F) => Kind4<M, XS, XR, XE, G>,
    gh: (g: G) => Kind4<M, XS, XR, XE, H>,
    hi: (h: H) => Kind4<M, XS, XR, XE, I>,
  ): (...a: A) => Kind4<M, XS, XR, XE, I>,
  <A extends ReadonlyArray<unknown>, XS, XR, XE, B, C, D, E, F, G, H, I, J>(
    ab: (...a: A) => Kind4<M, XS, XR, XE, B>,
    bc: (b: B) => Kind4<M, XS, XR, XE, C>,
    cd: (c: C) => Kind4<M, XS, XR, XE, D>,
    de: (d: D) => Kind4<M, XS, XR, XE, E>,
    ef: (e: E) => Kind4<M, XS, XR, XE, F>,
    fg: (f: F) => Kind4<M, XS, XR, XE, G>,
    gh: (g: G) => Kind4<M, XS, XR, XE, H>,
    hi: (h: H) => Kind4<M, XS, XR, XE, I>,
    ij: (i: I) => Kind4<M, XS, XR, XE, J>,
  ): (...a: A) => Kind4<M, XS, XR, XE, J>,
}

/**
 * Performs left-to-right function composition with chaining.
 *
 * @export
 * @template M The chain instance type.
 * @template E The constraint type.
 * @param {Chain4<M>} C The chain instance.
 * @return {ChainFlow4<M>} The composed flow function with chaining.
 *
 * @__PURE__
 */
export function chainFlow<M extends URIS4>(C: Chain4<M>): ChainFlow4<M>

/**
 * Performs left-to-right function composition with chaining.
 *
 * @export
 * @template M The chain instance type.
 * @template E The constraint type.
 * @param {Chain3C<M, E>} C The chain instance.
 * @return {ChainFlow3C<M, E>} The composed flow function with chaining.
 *
 * @__PURE__
 */
export function chainFlow<M extends URIS3, E>(C: Chain3C<M, E>): ChainFlow3C<M, E>

/**
 * Performs left-to-right function composition with chaining.
 *
 * @export
 * @template M The chain instance type.
 * @template E The constraint type.
 * @param {Chain3<M>} C The chain instance.
 * @return {ChainFlow3<M>} The composed flow function with chaining.
 *
 * @__PURE__
 */
export function chainFlow<M extends URIS3>(C: Chain3<M>): ChainFlow3<M>

/**
 * Performs left-to-right function composition with chaining.
 *
 * @export
 * @template M The chain instance type.
 * @template E The constraint type.
 * @param {Chain2C<M, E>} C The chain instance.
 * @return {ChainFlow2C<M, E>} The composed flow function with chaining.
 *
 * @__PURE__
 */
export function chainFlow<M extends URIS2, E>(C: Chain2C<M, E>): ChainFlow2C<M, E>

/**
 * Performs left-to-right function composition with chaining.
 *
 * @export
 * @template M The chain instance type.
 * @param {Chain2<M>} C The chain instance.
 * @return {ChainFlow2<M>} The composed flow function with chaining.
 *
 * @__PURE__
 */
export function chainFlow<M extends URIS2>(C: Chain2<M>): ChainFlow2<M>

/**
 * Performs left-to-right function composition with chaining.
 *
 * @export
 * @template M The chain instance type.
 * @param {Chain1<M>} C The chain instance.
 * @return {ChainFlow1<M>} The composed flow function with chaining.
 *
 * @__PURE__
 */
export function chainFlow<M extends URIS>(C: Chain1<M>): ChainFlow1<M>

/**
 * Performs left-to-right function composition with chaining.
 *
 * @export
 * @template M The chain instance type.
 * @param {Chain<M>} C The chain instance.
 * @return {ChainFlow<M>} The composed flow function with chaining.
 *
 * @__PURE__
 */
export function chainFlow<M>(C: Chain<M>): ChainFlow<M>

export function chainFlow<M>(C: Chain<M>) {
  /**
   * Performs left-to-right function composition with chaining.
   *
   * @step 1
   * @param {...ReadonlyArray<Function>} fns The function list to apply.
   * @return {Function} The composed function.
   *
   * @__PURE__
   */
  return function _chainFlow(...fns: readonly [ any, ...ReadonlyArray<(a: unknown) => HKT<M, unknown>> ]): Function {
    return function __chainFlow(...args: any[]) {
      let a = fns[ 0 ](...args)
      for (let i = 1, limit = fns.length; i < limit; ++i) { a = C.chain(a, fns[ i ]) }
      return a
    }
  }
}
