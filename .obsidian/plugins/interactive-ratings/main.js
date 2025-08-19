/*
THIS FILE IS GENERATED - DO NOT EDIT DIRECTLY
Interactive Ratings Plugin for Obsidian (https://obsidian.md)
*/
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  BASE_SYMBOL_PATTERNS: () => BASE_SYMBOL_PATTERNS,
  INTERACTION_BUFFER: () => INTERACTION_BUFFER,
  LOGGING_ENABLED: () => LOGGING_ENABLED,
  OVERLAY_VERTICAL_ADJUSTMENT: () => OVERLAY_VERTICAL_ADJUSTMENT,
  RatingWidget: () => RatingWidget,
  SYMBOL_PATTERNS: () => SYMBOL_PATTERNS,
  calculateNewRating: () => calculateNewRating,
  calculateRating: () => calculateRating,
  default: () => main_default,
  escapeRegexChar: () => escapeRegexChar,
  formatRatingText: () => formatRatingText,
  generateSymbolRegexPatterns: () => generateSymbolRegexPatterns,
  generateSymbolsString: () => generateSymbolsString,
  generateSymbolsStringForDisk: () => generateSymbolsStringForDisk,
  getSymbolSetForPattern: () => getSymbolSetForPattern,
  getUnicodeCharLength: () => getUnicodeCharLength,
  getUnicodeSubstring: () => getUnicodeSubstring,
  isFullOnlySymbol: () => isFullOnlySymbol,
  parseRatingText: () => parseRatingText,
  ratingEditorExtension: () => ratingEditorExtension,
  ratingViewPlugin: () => ratingViewPlugin,
  updateSymbolPatterns: () => updateSymbolPatterns,
  updateSymbolPatternsFromSettings: () => updateSymbolPatternsFromSettings,
  utf16ToUnicodePosition: () => utf16ToUnicodePosition
});
module.exports = __toCommonJS(main_exports);

// src/InteractiveRatingsPlugin.ts
var import_obsidian2 = require("obsidian");

// src/constants.ts
var LOGGING_ENABLED = false;
var BASE_SYMBOL_PATTERNS = [
  { full: "\u2605", empty: "\u2606", half: null },
  // Symbols
  { full: "\u2726", empty: "\u2727", half: null },
  // Star symbols
  { full: "\u{1F315}", empty: "\u{1F311}", half: "\u{1F317}" },
  // Moon phases
  { full: "\u25CF", empty: "\u25CB", half: "\u25D0" },
  // Circles
  { full: "\u25A0", empty: "\u25A1", half: "\u25E7" },
  // Squares
  { full: "\u25B2", empty: "\u25B3", half: null },
  // Triangles (no half)
  // Heart symbols
  { full: "\u2764\uFE0F", empty: "\u{1F90D}", half: null },
  // Red hearts
  { full: "\u{1F9E1}", empty: "\u{1F90D}", half: null },
  // Orange hearts
  { full: "\u{1F49B}", empty: "\u{1F90D}", half: null },
  // Yellow hearts
  { full: "\u{1F49A}", empty: "\u{1F90D}", half: null },
  // Green hearts
  { full: "\u{1F499}", empty: "\u{1F90D}", half: null },
  // Blue hearts
  { full: "\u{1F49C}", empty: "\u{1F90D}", half: null },
  // Purple hearts
  { full: "\u{1F5A4}", empty: "\u{1F90D}", half: null },
  // Black hearts
  { full: "\u{1F90E}", empty: "\u{1F90D}", half: null },
  // Brown hearts
  // Progress bar patterns
  { full: "\u2588", empty: "\u2581", half: null },
  // Block progress
  { full: "\u28FF", empty: "\u28C0", half: "\u2847" },
  // Braille dots
  { full: "\u2B24", empty: "\u25CB", half: null },
  // Solid/empty circles
  { full: "\u25A0", empty: "\u25A1", half: null },
  // Solid/empty squares
  { full: "\u25B0", empty: "\u25B1", half: null },
  // Dotted squares
  { full: "\u25FC", empty: "\u25AD", half: null },
  // Filled/empty rectangles
  { full: "\u25AE", empty: "\u25AF", half: null },
  // Vertical bars
  { full: "\u2B24", empty: "\u25EF", half: null },
  // Bold circles
  { full: "\u26AB", empty: "\u26AA", half: null },
  // Black/white circles
  { full: "\u2588", empty: "\u2591", half: null }
  // Block/light shade
];
var SYMBOL_PATTERNS = [
  ...BASE_SYMBOL_PATTERNS
  // User-configurable emojis are added dynamically from settings
];
function updateSymbolPatterns(newPatterns) {
  SYMBOL_PATTERNS.length = 0;
  SYMBOL_PATTERNS.push(...newPatterns);
}
var INTERACTION_BUFFER = 5;
var OVERLAY_VERTICAL_ADJUSTMENT = 2.1;

// src/editor-extension/ratingViewPlugin/ratingViewPlugin.ts
var import_view3 = require("@codemirror/view");
var import_state = require("@codemirror/state");

// src/ratings-parser/escapeRegexChar.ts
function escapeRegexChar(char) {
  return char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// src/ratings-parser/generateSymbolRegexPatterns.ts
function generateSymbolRegexPatterns() {
  return SYMBOL_PATTERNS.map((symbols) => {
    const symbolChars = [symbols.full, symbols.empty];
    if (symbols.half) {
      symbolChars.push(symbols.half);
    }
    const escapedSymbols = symbolChars.map(escapeRegexChar);
    const pattern = `(?:${escapedSymbols.join("|")})+`;
    if (LOGGING_ENABLED) {
      console.debug(`[InteractiveRatings] Generated regex pattern for symbol set`, {
        symbolSet: symbols,
        pattern,
        escapedSymbols,
        allowsSingleSymbol: true
      });
    }
    return new RegExp(pattern, "g");
  });
}

// src/ratings-parser/getSymbolSetForPattern.ts
function getSymbolSetForPattern(pattern) {
  for (const symbolSet of SYMBOL_PATTERNS) {
    if (pattern.includes(symbolSet.full) || pattern.includes(symbolSet.empty) || symbolSet.half && pattern.includes(symbolSet.half)) {
      return symbolSet;
    }
  }
  return null;
}

// src/ratings-parser/calculateRating.ts
function calculateRating(pattern, symbolSet) {
  let rating = 0;
  for (const char of [...pattern]) {
    if (char === symbolSet.full) rating += 1;
    else if (symbolSet.half && char === symbolSet.half) rating += 0.5;
  }
  if (LOGGING_ENABLED) {
    console.debug(`[InteractiveRatings] Calculated pattern rating`, {
      pattern,
      full: symbolSet.full,
      empty: symbolSet.empty,
      half: symbolSet.half,
      rating
    });
  }
  ;
  return rating;
}

// src/utils/getUnicodeCharLength.ts
function getUnicodeCharLength(str) {
  return [...str].length;
}

// src/utils/getUnicodeSubstring.ts
function getUnicodeSubstring(str, start, end) {
  return [...str].slice(start, end).join("");
}

// src/utils/utf16ToUnicodePosition.ts
function utf16ToUnicodePosition(str, utf16Position) {
  const utf16Substring = str.substring(0, utf16Position);
  return getUnicodeCharLength(utf16Substring);
}

// src/ratings-parser/parseRatingText/convertPositions.ts
function convertPositions(line, utf16Start, utf16End) {
  const unicodeStart = utf16ToUnicodePosition(line, utf16Start);
  const unicodeEnd = utf16ToUnicodePosition(line, utf16End);
  const afterSymbols = getUnicodeSubstring(line, unicodeEnd, getUnicodeCharLength(line));
  if (LOGGING_ENABLED) {
    console.debug("[InteractiveRatings] convertPositions debug", {
      utf16Start,
      utf16End,
      unicodeStart,
      unicodeEnd,
      afterSymbols: afterSymbols.substring(0, 40) + "...",
      lineLength: line.length,
      unicodeLineLength: getUnicodeCharLength(line)
    });
  }
  return { unicodeStart, unicodeEnd, afterSymbols };
}

// src/ratings-parser/parseRatingText/findRatingPatterns.ts
function findRatingPatterns(afterSymbols) {
  const ratingTextMatch = afterSymbols.match(/^\s*(?:\(([\d\.]+)\/(\d+)\)|([\d\.]+)\/(\d+)|(?:\()?(\d+)%(?:\))?)/);
  const commentMatch = afterSymbols.match(/^\s*<!--\s*([\d\.]+)\/(\d+)\s*-->/);
  let visibleMatch = null;
  let htmlCommentMatch = null;
  let totalMatchLength = 0;
  if (ratingTextMatch) {
    visibleMatch = ratingTextMatch;
    totalMatchLength = ratingTextMatch[0].length;
    const afterVisible = afterSymbols.substring(ratingTextMatch[0].length);
    const followingCommentMatch = afterVisible.match(/^\s*<!--\s*([\d\.]+)\/(\d+)\s*-->/);
    if (followingCommentMatch) {
      htmlCommentMatch = followingCommentMatch;
      totalMatchLength += followingCommentMatch[0].length;
    }
  } else if (commentMatch) {
    htmlCommentMatch = commentMatch;
    totalMatchLength = commentMatch[0].length;
  }
  return { visibleMatch, htmlCommentMatch, totalMatchLength };
}

// src/ratings-parser/parseRatingText/buildRatingTextResult.ts
function buildRatingTextResult(visibleMatch, htmlCommentMatch, totalMatchLength, utf16End) {
  const match = visibleMatch || htmlCommentMatch;
  const isComment = !visibleMatch && !!htmlCommentMatch;
  const hasBothFormats = !!(visibleMatch && htmlCommentMatch);
  if (match) {
    let format = "";
    let numerator = 0;
    let denominator = 0;
    if (isComment && htmlCommentMatch) {
      format = "comment-fraction";
      numerator = parseFloat(htmlCommentMatch[1]);
      denominator = parseInt(htmlCommentMatch[2]);
    } else if (match[1] && match[2]) {
      format = "fraction-parentheses";
      numerator = parseFloat(match[1]);
      denominator = parseInt(match[2]);
    } else if (match[3] && match[4]) {
      format = "fraction";
      numerator = parseFloat(match[3]);
      denominator = parseInt(match[4]);
    } else if (match[5]) {
      const hasParens = match[0].includes("(") && match[0].includes(")");
      format = hasParens ? "percent-parentheses" : "percent";
      numerator = parseInt(match[5]);
      denominator = 100;
    }
    const endPosition = utf16End + totalMatchLength;
    const result = {
      format,
      numerator,
      denominator,
      text: match[0],
      endPosition
    };
    if (LOGGING_ENABLED) {
      console.debug("[InteractiveRatings] Found rating text", {
        result,
        matchedText: match[0],
        isComment,
        hasPrecedence: !isComment,
        hasBothFormats,
        visibleMatchLength: visibleMatch ? visibleMatch[0].length : 0,
        commentMatchLength: htmlCommentMatch ? htmlCommentMatch[0].length : 0,
        totalMatchLength,
        calculatedEndPosition: endPosition
      });
    }
    return result;
  }
  return null;
}

// src/ratings-parser/parseRatingText/parseRatingText.ts
function parseRatingText(line, utf16Start, utf16End) {
  const { afterSymbols } = convertPositions(line, utf16Start, utf16End);
  const { visibleMatch, htmlCommentMatch, totalMatchLength } = findRatingPatterns(afterSymbols);
  return buildRatingTextResult(visibleMatch, htmlCommentMatch, totalMatchLength, utf16End);
}

// src/utils/isFullOnlySymbol.ts
function isFullOnlySymbol(symbolSet) {
  return symbolSet.full === symbolSet.empty && !symbolSet.half;
}

// src/editor-extension/ratingViewPlugin/collectMatches.ts
function collectMatches(text) {
  const matches = [];
  const symbolRegexes = generateSymbolRegexPatterns();
  for (const regex of symbolRegexes) {
    let match;
    regex.lastIndex = 0;
    while ((match = regex.exec(text)) !== null) {
      const pattern = match[0];
      const start = match.index;
      const end = start + pattern.length;
      const symbolSet = getSymbolSetForPattern(pattern);
      if (!symbolSet) continue;
      const rating = calculateRating(pattern, symbolSet);
      const isFullOnly = isFullOnlySymbol(symbolSet);
      if (isFullOnly && rating === 0) continue;
      const ratingText = parseRatingText(text, start, end);
      const unicodeLength = getUnicodeCharLength(pattern);
      if (!ratingText && unicodeLength < 3) {
        continue;
      }
      const actualEnd = ratingText ? ratingText.endPosition : end;
      if (LOGGING_ENABLED) {
        console.debug("[InteractiveRatings] Found rating match", {
          pattern,
          start,
          end,
          actualEnd,
          unicodeLength,
          rating,
          hasRatingText: !!ratingText,
          ratingTextDetails: ratingText,
          symbolSet,
          isFullOnly,
          isCommentFormat: ratingText && ratingText.format === "comment-fraction",
          canAutoAddComment: isFullOnly && !ratingText
        });
      }
      matches.push({
        pattern,
        start,
        end: actualEnd,
        symbolSet,
        rating,
        ratingText
      });
    }
  }
  return matches;
}

// src/editor-extension/ratingViewPlugin/filterOverlappingMatches.ts
function filterOverlappingMatches(matches) {
  const sortedMatches = [...matches].sort((a, b) => a.start - b.start);
  const filteredMatches = [];
  let lastEnd = -1;
  for (const match of sortedMatches) {
    if (match.start >= lastEnd) {
      filteredMatches.push(match);
      lastEnd = match.end;
    }
  }
  return filteredMatches;
}

// src/editor-extension/ratingViewPlugin/buildDecorationsFromMatches.ts
var import_view2 = require("@codemirror/view");

// src/editor-extension/RatingWidget/RatingWidget.ts
var import_view = require("@codemirror/view");

// src/editor-extension/RatingWidget/calculateRatingFromClick.ts
function calculateRatingFromClick(event, span, symbolIndex, symbolSet) {
  const isFullOnly = isFullOnlySymbol(symbolSet);
  if (isFullOnly) {
    return Math.max(1, symbolIndex + 1);
  }
  if (!symbolSet.half) {
    return symbolIndex + 1;
  }
  const rect = span.getBoundingClientRect();
  const relativeX = event.clientX - rect.left;
  const symbolWidth = rect.width;
  const position = relativeX / symbolWidth;
  if (position <= 0.5) {
    return symbolIndex + 0.5;
  } else {
    return symbolIndex + 1;
  }
}

// src/editor-extension/RatingWidget/calculateRatingFromHover.ts
function calculateRatingFromHover(event, span, symbolIndex, symbolSet) {
  const isFullOnly = isFullOnlySymbol(symbolSet);
  if (isFullOnly) {
    return Math.max(1, symbolIndex + 1);
  }
  if (!symbolSet.half) {
    return symbolIndex + 1;
  }
  const rect = span.getBoundingClientRect();
  const relativeX = event.clientX - rect.left;
  const symbolWidth = rect.width;
  const position = relativeX / symbolWidth;
  if (position <= 0.5) {
    return symbolIndex + 0.5;
  } else {
    return symbolIndex + 1;
  }
}

// src/utils/formatRatingText.ts
function formatRatingText(format, newRating, symbolCount, denominator, supportsHalf, isFullOnlySymbol2 = false) {
  let newNumerator;
  if (format.includes("percent")) {
    newNumerator = Math.round(newRating / symbolCount * 100);
  } else {
    newNumerator = newRating;
    if (!supportsHalf) {
      newNumerator = Math.round(newNumerator);
    }
  }
  if (isFullOnlySymbol2 && format === "comment-fraction" && newNumerator === denominator) {
    return "";
  }
  let formattedText = "";
  switch (format) {
    case "fraction":
      formattedText = ` ${newNumerator}/${denominator}`;
      break;
    case "fraction-parentheses":
      formattedText = ` (${newNumerator}/${denominator})`;
      break;
    case "percent":
      formattedText = ` ${newNumerator}%`;
      break;
    case "percent-parentheses":
      formattedText = ` (${newNumerator}%)`;
      break;
    // Simplified HTML comment format (only basic fraction)
    case "comment-fraction":
      formattedText = `<!-- ${newNumerator}/${denominator} -->`;
      break;
    default:
      formattedText = "";
  }
  if (LOGGING_ENABLED) {
    console.debug(`[InteractiveRatings] Formatted rating text`, {
      format,
      newRating,
      symbolCount,
      denominator,
      supportsHalf,
      isFullOnlySymbol: isFullOnlySymbol2,
      newNumerator,
      formattedText,
      isComment: format.startsWith("comment-"),
      isPerfectRating: newNumerator === denominator,
      removedComment: isFullOnlySymbol2 && format === "comment-fraction" && newNumerator === denominator
    });
  }
  ;
  return formattedText;
}

// src/editor-extension/RatingWidget/applySymbolState.ts
function applySymbolState(span, state) {
  span.classList.remove("interactive-rating-symbol--rated", "interactive-rating-symbol--unrated", "interactive-rating-symbol--normal", "interactive-rating-symbol--empty", "interactive-rating-symbol--half");
  span.classList.add(`interactive-rating-symbol--${state}`);
}

// src/editor-extension/RatingWidget/previewRating.ts
function previewRating(newRating, container, symbolSet, pattern, ratingText) {
  const symbolsContainer = container.querySelector(".interactive-rating-symbols");
  if (!symbolsContainer) return;
  const spans = symbolsContainer.querySelectorAll("span");
  const isFullOnly = isFullOnlySymbol(symbolSet);
  const isCommentFormat = isFullOnly && ratingText && ratingText.format === "comment-fraction";
  spans.forEach((span, index) => {
    const symbolRating = index + 1;
    const halfRating = index + 0.5;
    if (isFullOnly) {
      span.textContent = symbolSet.full;
      if (symbolRating <= newRating) {
        applySymbolState(span, "rated");
      } else {
        applySymbolState(span, "unrated");
      }
    } else {
      if (symbolRating <= newRating) {
        span.textContent = symbolSet.full;
        applySymbolState(span, "rated");
      } else if (symbolSet.half && halfRating <= newRating && halfRating > newRating - 0.5) {
        span.textContent = symbolSet.half;
        applySymbolState(span, "half");
      } else {
        span.textContent = symbolSet.empty;
        applySymbolState(span, "empty");
      }
    }
  });
  if (ratingText && !isCommentFormat) {
    const textContainer = container.querySelector(".interactive-rating-text");
    if (textContainer) {
      const unicodeLength = getUnicodeCharLength(pattern);
      const previewText = formatRatingText(
        ratingText.format,
        newRating,
        unicodeLength,
        // Always use actual pattern length for percentage calculations
        ratingText.denominator,
        // Use original denominator for fraction displays
        !!symbolSet.half && !isFullOnly,
        isFullOnly
      );
      textContainer.textContent = previewText;
    }
  }
  if (LOGGING_ENABLED) {
    console.debug("[InteractiveRatings] Preview rating with simplified comment format support", {
      newRating,
      hasHalf: !!symbolSet.half,
      isFullOnly,
      isCommentFormat,
      symbolSet,
      denominator: ratingText == null ? void 0 : ratingText.denominator
    });
  }
}

// src/editor-extension/RatingWidget/renderRating.ts
function renderRating(rating, container, symbolSet, ratingText) {
  const symbolsContainer = container.querySelector(".interactive-rating-symbols");
  if (!symbolsContainer) return;
  const spans = symbolsContainer.querySelectorAll("span");
  const isFullOnly = isFullOnlySymbol(symbolSet);
  const isCommentFormat = isFullOnly && ratingText && ratingText.format === "comment-fraction";
  spans.forEach((span, index) => {
    const symbolRating = index + 1;
    const halfRating = index + 0.5;
    if (isFullOnly) {
      span.textContent = symbolSet.full;
      if (symbolRating <= rating) {
        applySymbolState(span, "rated");
      } else {
        applySymbolState(span, "unrated");
      }
    } else {
      if (symbolRating <= rating) {
        span.textContent = symbolSet.full;
        applySymbolState(span, "rated");
      } else if (symbolSet.half && halfRating <= rating && halfRating > rating - 0.5) {
        span.textContent = symbolSet.half;
        applySymbolState(span, "half");
      } else {
        span.textContent = symbolSet.empty;
        applySymbolState(span, "empty");
      }
    }
  });
  if (ratingText && !isCommentFormat) {
    const textContainer = container.querySelector(".interactive-rating-text");
    if (textContainer) {
      textContainer.textContent = ratingText.text;
    }
  }
  if (LOGGING_ENABLED) {
    console.debug("[InteractiveRatings] Render rating with simplified comment format support", {
      rating,
      hasHalf: !!symbolSet.half,
      isFullOnly,
      isCommentFormat,
      symbolSet
    });
  }
}

// src/utils/generateSymbolsString.ts
function generateSymbolsString(rating, symbolCount, full, empty, half, supportsHalf, symbolSet, denominator) {
  const isFullOnly = symbolSet && isFullOnlySymbol(symbolSet);
  const totalSymbols = isFullOnly && denominator ? denominator : symbolCount;
  let newSymbols = "";
  for (let i = 0; i < totalSymbols; i++) {
    if (i < Math.floor(rating)) {
      newSymbols += full;
    } else if (supportsHalf && i === Math.floor(rating) && rating % 1 !== 0) {
      newSymbols += half;
    } else {
      newSymbols += empty;
    }
  }
  if (LOGGING_ENABLED) {
    console.debug(`[InteractiveRatings] Generated symbols string`, {
      rating,
      symbolCount,
      totalSymbols,
      full,
      empty,
      half,
      supportsHalf,
      isFullOnly,
      denominator,
      newSymbols
    });
  }
  ;
  return newSymbols;
}

// src/utils/generateSymbolsStringForDisk.ts
function generateSymbolsStringForDisk(rating, symbolCount, full, empty, half, supportsHalf, symbolSet) {
  if (symbolSet && isFullOnlySymbol(symbolSet)) {
    const ratedCount = Math.floor(rating);
    return full.repeat(ratedCount);
  }
  return generateSymbolsString(rating, symbolCount, full, empty, half, supportsHalf, symbolSet);
}

// src/editor-extension/RatingWidget/updateRating.ts
function updateRating(view, newRating, symbolSet, pattern, startPos, endPos, rating, ratingText) {
  try {
    const isFullOnly = isFullOnlySymbol(symbolSet);
    const unicodeLength = getUnicodeCharLength(pattern);
    const newSymbols = generateSymbolsStringForDisk(
      newRating,
      unicodeLength,
      symbolSet.full,
      symbolSet.empty,
      symbolSet.half || "",
      !!symbolSet.half && !isFullOnly,
      symbolSet
    );
    let newText = newSymbols;
    let newRatingFormat = "";
    if (ratingText) {
      newRatingFormat = ratingText.format;
    } else if (isFullOnly) {
      newRatingFormat = "comment-fraction";
    }
    if (newRatingFormat) {
      const denominator = ratingText ? ratingText.denominator : unicodeLength;
      const newRatingText = formatRatingText(
        newRatingFormat,
        newRating,
        unicodeLength,
        // Always use actual pattern length for percentage calculations
        denominator,
        // Use original denominator for fraction displays
        !!symbolSet.half && !isFullOnly,
        isFullOnly
      );
      newText = newSymbols + newRatingText;
    }
    view.dispatch({
      changes: {
        from: startPos,
        to: endPos,
        insert: newText
      }
    });
    view.contentDOM.blur();
    if (LOGGING_ENABLED) {
      console.info("[InteractiveRatings] Rating updated with auto-add HTML comment support", {
        oldRating: rating,
        newRating,
        newSymbols,
        newText,
        hasRatingText: !!ratingText,
        hasHalf: !!symbolSet.half,
        isFullOnly,
        autoAddedComment: !ratingText && isFullOnly,
        newRatingFormat,
        denominator: ratingText ? ratingText.denominator : unicodeLength,
        position: { from: startPos, to: endPos }
      });
    }
  } catch (error) {
    if (LOGGING_ENABLED) {
      console.error("[InteractiveRatings] Error updating rating", error);
    }
  }
}

// src/editor-extension/RatingWidget/RatingWidget.ts
var RatingWidget = class extends import_view.WidgetType {
  constructor(pattern, rating, symbolSet, startPos, endPos, ratingText) {
    super();
    this.pattern = pattern;
    this.rating = rating;
    this.symbolSet = symbolSet;
    this.startPos = startPos;
    this.endPos = endPos;
    this.ratingText = ratingText;
  }
  toDOM(view) {
    const container = document.createElement("span");
    container.className = "interactive-rating-editor-widget";
    container.setAttribute("data-rating", this.rating.toString());
    const unicodeLength = getUnicodeCharLength(this.pattern);
    container.setAttribute("data-pattern-length", unicodeLength.toString());
    container.setAttribute("data-supports-half", (!!this.symbolSet.half).toString());
    const isFullOnly = isFullOnlySymbol(this.symbolSet);
    container.setAttribute("data-full-only", isFullOnly.toString());
    const displaySymbolCount = isFullOnly && this.ratingText ? this.ratingText.denominator : unicodeLength;
    container.setAttribute("data-display-symbol-count", displaySymbolCount.toString());
    const isCommentFormat = isFullOnly && this.ratingText && this.ratingText.format === "comment-fraction";
    container.setAttribute("data-comment-format", isCommentFormat ? "true" : "false");
    const symbolsContainer = document.createElement("span");
    symbolsContainer.className = "interactive-rating-symbols";
    for (let i = 0; i < displaySymbolCount; i++) {
      const span = document.createElement("span");
      span.textContent = this.symbolSet.full;
      span.className = "interactive-rating-symbol";
      span.setAttribute("data-symbol-index", i.toString());
      span.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const newRating = calculateRatingFromClick(e, span, i, this.symbolSet);
        updateRating(view, newRating, this.symbolSet, this.pattern, this.startPos, this.endPos, this.rating, this.ratingText);
      });
      span.addEventListener("mouseenter", (e) => {
        const previewRatingValue = calculateRatingFromHover(e, span, i, this.symbolSet);
        previewRating(previewRatingValue, container, this.symbolSet, this.pattern, this.ratingText);
      });
      span.addEventListener("mousemove", (e) => {
        const previewRatingValue = calculateRatingFromHover(e, span, i, this.symbolSet);
        previewRating(previewRatingValue, container, this.symbolSet, this.pattern, this.ratingText);
      });
      symbolsContainer.appendChild(span);
    }
    container.appendChild(symbolsContainer);
    if (this.ratingText && !isCommentFormat) {
      const textContainer = document.createElement("span");
      textContainer.className = "interactive-rating-text";
      textContainer.textContent = this.ratingText.text;
      container.appendChild(textContainer);
    }
    container.addEventListener("mouseleave", () => {
      renderRating(this.rating, container, this.symbolSet, this.ratingText);
    });
    renderRating(this.rating, container, this.symbolSet, this.ratingText);
    return container;
  }
};

// src/editor-extension/ratingViewPlugin/buildDecorationsFromMatches.ts
function buildDecorationsFromMatches(matches, cursorPos, builder) {
  for (const match of matches) {
    if (cursorPos >= match.start - 1 && cursorPos <= match.end + 1) {
      if (LOGGING_ENABLED) {
        console.debug("[InteractiveRatings] Skipping widget creation due to nearby cursor", {
          cursorPos,
          ratingStart: match.start,
          ratingEnd: match.end
        });
      }
      continue;
    }
    const decoration = import_view2.Decoration.replace({
      widget: new RatingWidget(
        match.pattern,
        match.rating,
        match.symbolSet,
        match.start,
        match.end,
        match.ratingText
      ),
      inclusive: false
    });
    builder.add(match.start, match.end, decoration);
  }
  if (LOGGING_ENABLED && matches.length > 0) {
    const skippedCount = matches.filter(
      (m) => cursorPos >= m.start - 1 && cursorPos <= m.end + 1
    ).length;
    const fullOnlyCount = matches.filter((m) => isFullOnlySymbol(m.symbolSet)).length;
    const commentCount = matches.filter((m) => m.ratingText && m.ratingText.format === "comment-fraction").length;
    const autoAddCandidates = matches.filter((m) => isFullOnlySymbol(m.symbolSet) && !m.ratingText).length;
    const shortPatternCount = matches.filter((m) => getUnicodeCharLength(m.pattern) < 3).length;
    console.debug(`[InteractiveRatings] Built ${matches.length - skippedCount}/${matches.length} rating decorations (${skippedCount} skipped due to cursor proximity)`, {
      cursorPos,
      withRatingText: matches.filter((m) => m.ratingText).length,
      symbolsOnly: matches.filter((m) => !m.ratingText).length,
      withHalfSymbols: matches.filter((m) => m.symbolSet.half).length,
      fullOnlySymbols: fullOnlyCount,
      commentFormatSymbols: commentCount,
      autoAddCandidates,
      shortPatterns: shortPatternCount
    });
  }
}

// src/editor-extension/ratingViewPlugin/ratingViewPlugin.ts
var ratingViewPlugin = import_view3.ViewPlugin.fromClass(
  class {
    constructor(view) {
      this.decorations = this.buildDecorations(view);
    }
    update(update) {
      if (update.docChanged || update.viewportChanged || update.selectionSet) {
        this.decorations = this.buildDecorations(update.view);
      }
    }
    buildDecorations(view) {
      const builder = new import_state.RangeSetBuilder();
      try {
        const text = view.state.doc.toString();
        const cursorPos = view.state.selection.main.head;
        const matches = collectMatches(text);
        const filteredMatches = filterOverlappingMatches(matches);
        buildDecorationsFromMatches(filteredMatches, cursorPos, builder);
      } catch (error) {
        if (LOGGING_ENABLED) {
          console.error("[InteractiveRatings] Error building decorations", error);
        }
      }
      return builder.finish();
    }
  },
  {
    decorations: (v) => v.decorations
  }
);
var ratingEditorExtension = [ratingViewPlugin];

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SUPPORTED_EMOJIS = "\u{1F3A5}\u{1F3C6}\u2B50\u{1F48E}\u{1F525}\u26A1\u{1F3AF}\u{1F680}\u{1F4B0}\u{1F396}\uFE0F";
var DEFAULT_SETTINGS = {
  supportedEmojis: DEFAULT_SUPPORTED_EMOJIS
};
var InteractiveRatingsSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Interactive Ratings Settings" });
    new import_obsidian.Setting(containerEl).setName("Emojis to support in ratings").setDesc("Emojis to use for ratings.").addTextArea((text) => text.setPlaceholder(DEFAULT_SUPPORTED_EMOJIS).setValue(this.plugin.settings.supportedEmojis).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.supportedEmojis = value;
      yield this.plugin.saveSettings();
      this.plugin.updateSymbolPatterns();
    })));
  }
};

// src/utils/updateSymbolPatternsFromSettings.ts
function updateSymbolPatternsFromSettings(settings) {
  const newPatterns = [...BASE_SYMBOL_PATTERNS];
  if (settings.supportedEmojis) {
    const emojis = [...settings.supportedEmojis];
    for (const emoji of emojis) {
      if (emoji.trim()) {
        newPatterns.push({
          full: emoji,
          empty: emoji,
          half: null
        });
      }
    }
  }
  updateSymbolPatterns(newPatterns);
  if (LOGGING_ENABLED) {
    console.debug("[InteractiveRatings] Updated symbol patterns from settings", {
      supportedEmojis: settings.supportedEmojis,
      totalPatterns: newPatterns.length
    });
  }
}

// src/InteractiveRatingsPlugin.ts
var InteractiveRatingsPlugin = class extends import_obsidian2.Plugin {
  onload() {
    return __async(this, null, function* () {
      if (LOGGING_ENABLED) {
        console.info("[InteractiveRatings] Plugin loading - edit mode only");
      }
      yield this.loadSettings();
      this.updateSymbolPatterns();
      this.registerEditorExtension(ratingEditorExtension);
      this.addSettingTab(new InteractiveRatingsSettingTab(this.app, this));
      if (LOGGING_ENABLED) {
        console.info("[InteractiveRatings] Plugin loaded successfully");
      }
    });
  }
  onunload() {
    if (LOGGING_ENABLED) {
      console.info("[InteractiveRatings] Plugin unloaded");
    }
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
  updateSymbolPatterns() {
    updateSymbolPatternsFromSettings(this.settings);
  }
};

// src/utils/calculateNewRating.ts
function calculateNewRating(overlay, clientX) {
  const containerRect = overlay.getBoundingClientRect();
  const symbolCount = parseInt(overlay.dataset.symbolCount);
  const symbolWidth = containerRect.width / symbolCount;
  const relativeX = clientX - containerRect.left;
  const hoveredSymbolIndex = Math.floor(relativeX / symbolWidth);
  const positionWithinSymbol = relativeX % symbolWidth / symbolWidth;
  const supportsHalf = overlay.dataset.supportsHalf === "true";
  const useHalfSymbol = supportsHalf && positionWithinSymbol < 0.5;
  let newRating = hoveredSymbolIndex + (useHalfSymbol ? 0.5 : 1);
  if (newRating < 0) {
    newRating = 0;
  }
  if (LOGGING_ENABLED) {
    console.debug(`[InteractiveRatings] Calculated new rating`, {
      clientX,
      containerRect: {
        left: containerRect.left,
        width: containerRect.width
      },
      symbolCount,
      symbolWidth,
      relativeX,
      hoveredSymbolIndex,
      positionWithinSymbol,
      supportsHalf,
      useHalfSymbol,
      newRating
    });
  }
  return newRating;
}

// src/main.ts
var main_default = InteractiveRatingsPlugin;

/* nosourcemap */